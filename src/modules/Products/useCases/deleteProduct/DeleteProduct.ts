import { IAPIError } from '../../../../commons/Requester/RequesterError'
import IProductRepo from '../../repo/IProductRepo'
import DeleteProductStatusError from './error/DeleteProductStatusError'

export default class DeleteProduct {
  constructor(private productRepo: IProductRepo) {}
  public async execute(code: number) {
    try {
      return await this.productRepo.deleteProduct(code)
    } catch (error) {
      throw DeleteProductStatusError.create(<IAPIError>error)
    }
  }
}
