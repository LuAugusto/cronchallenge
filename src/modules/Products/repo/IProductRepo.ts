import { DefaultResponse } from '../../../commons/Utils'
import Product from '../domain/Product'
import { ParamsDTO } from '../map/dto/ParamsDTO'
import { ProductBodyDTO } from '../map/dto/ProductDTO'

export default interface IProductRepo {
  createProduct(product: Record<string, any>): Promise<DefaultResponse>
  removeAllProducts(): Promise<DefaultResponse>
  getProduct(code: number): Promise<Product | []>
  getProducts(params: ParamsDTO): Promise<Product[] | []>
  deleteProduct(code: number): Promise<DefaultResponse>
  updateProduct(code: number, data: ProductBodyDTO): Promise<DefaultResponse>
}
