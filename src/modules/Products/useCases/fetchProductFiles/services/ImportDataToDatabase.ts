import fs from 'fs'
import https from 'https'
import zlib from 'zlib'
import APILogger from '../../../../../commons/APILogger'
import readLine from 'readline'
import moment from 'moment-timezone'

import FetchProductFilesGenerateUrl from './FetchProductFilesGenerateUrl'
import IProductRepo from '../../../repo/IProductRepo'
import { IHistoryImports } from '../../../../../infra/mongodb/repo/IHistoryImports'

const fetchProductFilesGenerateUrl = new FetchProductFilesGenerateUrl()

const logger = APILogger.getInstance()

export default class ImportDataToDatabase {
  constructor(private productRepo: IProductRepo, private HistoryImports: IHistoryImports) {}
  private INTERVAL = 60000
  private PATH = 'temp'

  private generateUrls() {
    return fetchProductFilesGenerateUrl.urlDownloadfiles()
  }

  private async removeOldFiles() {
    await this.productRepo.removeAllProducts()
  }

  public async execute() {
    await this.removeOldFiles()
    const urls = this.generateUrls()
    this.createStreamsUrlsToReadFile(urls)
    this.setImportHistory()
  }

  private createStreamsUrlsToReadFile(urls: string[]) {
    urls.forEach((url, index) => {
      setTimeout(() => {
        const input = fs.createWriteStream(`${__dirname}/temp/products_0${index + 1}.json`)
        const unzip = zlib.createGunzip()
        this.download(url, input, unzip, index)
      }, Number(this.INTERVAL) * (index + 2))
    })
  }

  private async download(url: string, output: fs.WriteStream, zip: zlib.Gunzip, index: number) {
    return https.get(url, (res) => {
      res.pipe(zip).pipe(output)
      output.on('finish', () => {
        this.selectLinesFromFile(`products_0${index + 1}.json`)
        output.close()
        logger.info('Download completed', { url })
      })
    })
  }

  private generateFilePath(path: string) {
    return `${__dirname}/${this.PATH}/${path}`
  }

  private async selectLinesFromFile(path: string) {
    const pathFile = this.generateFilePath(path)
    const r1 = readLine.createInterface({
      input: fs.createReadStream(pathFile),
    })
    const productList: Record<string, any>[] = []
    r1.on('line', async (line) => {
      const addProperties = JSON.parse(line)
      addProperties.status = 'published'
      addProperties.code = Number(addProperties.code.replace(/"/g, ''))
      addProperties.imported_t = moment().tz('America/Sao_Paulo').toString()
      productList.push(addProperties)
      if (productList.length == 100) {
        r1.close()
        this.importNewDataToDatabase(productList)
        this.deleteFile(path)
      }
    })
  }

  private deleteFile(path: string) {
    fs.unlink(`${__dirname}/temp/${path}`, () => {
      logger.info('file deleted', { path })
    })
  }

  private async setImportHistory() {
    await this.HistoryImports.setImportTime()
  }

  private async importNewDataToDatabase(data: Record<string, any>[]) {
    await this.productRepo.createProduct(data)
  }
}
