import { IAPIError } from '../../../../commons/Requester/RequesterError'
import { ProductBodyDTO } from '../../map/dto/ProductDTO'
import IProductRepo from '../../repo/IProductRepo'
import UpdateProductStatusError from './error/UpdateProductStatusError'

export default class UpdateProduct {
  constructor(private productRepo: IProductRepo) {}

  public async execute(code: number, data: ProductBodyDTO) {
    try {
      return await this.productRepo.updateProduct(code, data)
    } catch (error) {
      throw UpdateProductStatusError.create(<IAPIError>error)
    }
  }
}
