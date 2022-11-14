import { ParameterizedContext } from 'koa'
import GetProduct from './GetProduct'
import { ProductCodeDTO } from '../../map/dto/ProductCodeDTO'

export default class GetProductController {
  constructor(private useCase: GetProduct) {}

  public async execute({ params, response }: ParameterizedContext) {
    const { code } = <ProductCodeDTO>params
    const product = await this.useCase.execute(code)

    response.body = product
    response.status = 200
  }
}
