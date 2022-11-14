import { IAPIError } from 'commons/Requester/RequesterError'
import { ParamsDTO } from '../../map/dto/ParamsDTO'
import Product from '../../domain/Product'
import IProductRepo from '../../repo/IProductRepo'
import GetProductStatusError from '../../error/GetProductStatusError'

export default class GetProducts {
  constructor(private productRepo: IProductRepo) {}

  public async execute(params: ParamsDTO): Promise<Product[] | []> {
    try {
      return this.productRepo.getProducts(params)
    } catch (error) {
      throw GetProductStatusError.create(<IAPIError>error)
    }
  }
}
