import { DefaultResponse } from '../../../../commons/Utils'
import { ParameterizedContext } from 'koa'
import { ProductCodeDTO } from '../../map/dto/ProductCodeDTO'
import DeleteProduct from './DeleteProduct'

export default class DeleteProductController {
  constructor(private useCase: DeleteProduct) {}

  public async execute({ response, params }: ParameterizedContext) {
    const { code } = <ProductCodeDTO>params
    await this.useCase.execute(code)

    response.status = 200
    response.body = DefaultResponse.SUCCESS
  }
}
