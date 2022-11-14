import { ParameterizedContext } from 'koa'
import { ParamsDTO } from 'modules/Products/map/dto/ParamsDTO'
import GetProducts from './GetProducts'

export default class GetProductsController {
  constructor(private useCase: GetProducts) {}

  public async execute({ response, request }: ParameterizedContext) {
    const { limit, offset } = <ParamsDTO>request.query

    const products = await this.useCase.execute({ limit, offset })

    response.status = 200
    response.body = products
  }
}
