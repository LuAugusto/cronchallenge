import { ParameterizedContext } from 'koa'
import { ProductBodyDTO } from '../../map/dto/ProductDTO'
import { ProductCodeDTO } from '../../map/dto/ProductCodeDTO'
import UpdateProduct from './UpdateProduct'
import { DefaultResponse } from '../../../../commons/Utils'

export default class UpdateProductController {
  constructor(private useCase: UpdateProduct) {}

  public async execute({ request, response, params }: ParameterizedContext) {
    const { code } = <ProductCodeDTO>params
    const body = <ProductBodyDTO>request.body

    await this.useCase.execute(code, body)

    response.status = 200
    response.body = DefaultResponse.SUCCESS
  }
}
