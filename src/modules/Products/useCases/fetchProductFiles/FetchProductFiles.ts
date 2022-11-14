import { ParameterizedContext, Request } from 'koa'
import zlib from 'zlib'
import https from 'https'
import fs from 'fs'
import readLine from 'readline'

import FetchProductFilesService from './services/FetchProductFilesService'

import FetchProductFilesGenerateUrl from './services/FetchProductFilesGenerateUrl'

const fetchProductFilesGenerateUrl = new FetchProductFilesGenerateUrl()
const service = new FetchProductFilesService()

export default class FetchProductFilesController {
  public async execute({ request, response }: ParameterizedContext) {
    await service.execute()

    // const r1 = readLine.createInterface({
    //   input: fs.createReadStream(`${__dirname}/temp/products_08.json`),
    // })

    // const products: string[] = []

    // r1.on('line', (line) => {
    //   products.push(line)
    //   console.log('Line from line', line)
    //   if (products.length == 2) {
    //     r1.close()
    //     console.log(products)
    //   }
    // })

    response.body = 'ok'
  }
}
