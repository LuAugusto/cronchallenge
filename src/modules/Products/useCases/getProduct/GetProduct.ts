import { IAPIError } from 'commons/Requester/RequesterError'
import Product from '../../domain/Product'
import IProductRepo from '../../repo/IProductRepo'
import GetProductStatusError from '../../error/GetProductStatusError'

export default class GetProduct {
  constructor(private productRepo: IProductRepo) {}

  public async execute(code: number): Promise<Product | []> {
    try {
      return this.productRepo.getProduct(code)
    } catch (error) {
      throw GetProductStatusError.create(<IAPIError>error)
    }
  }
}
