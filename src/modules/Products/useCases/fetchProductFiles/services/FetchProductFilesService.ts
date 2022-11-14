import fs from 'fs'
import https from 'https'
import zlib from 'zlib'
import APILogger from '../../../../../commons/APILogger'
import readLine from 'readline'
import moment from 'moment-timezone'
import ProductRepo from '../../../repo/ProductRepo'

const repo = new ProductRepo()

import FetchProductFilesGenerateUrl from './FetchProductFilesGenerateUrl'

const fetchProductFilesGenerateUrl = new FetchProductFilesGenerateUrl()

const logger = APILogger.getInstance()

export default class FetchProductFilesService {
  public async execute() {
    await repo.removeAllProducts()
    const urls = fetchProductFilesGenerateUrl.urlDownloadfiles()
    urls.forEach((url, index) => {
      setTimeout(() => {
        const input = fs.createWriteStream(`${__dirname}/temp/products_0${index + 1}.json`)
        const unzip = zlib.createGunzip()
        this.download(url, input, unzip, index)
      }, 60000 * (index + 2))
    })
  }

  public async download(url: string, output: fs.WriteStream, zip: zlib.Gunzip, index: number) {
    return https.get(url, (res) => {
      console.log(url)
      res.pipe(zip).pipe(output)
      output.on('finish', () => {
        this.selectLinesFromProduct(`products_0${index + 1}.json`)
        output.close()
        logger.info('Download completed', { url })
      })
    })
  }

  public async selectLinesFromProduct(path: string) {
    const r1 = readLine.createInterface({
      input: fs.createReadStream(`${__dirname}/temp/${path}`),
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
        await repo.createProduct(productList)
        fs.unlink(`${__dirname}/temp/${path}`, () => {
          logger.info('file deleted:', { path })
        })
      }
    })
  }
}
