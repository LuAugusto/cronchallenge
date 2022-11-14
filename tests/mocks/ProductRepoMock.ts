import { DefaultResponse } from '../../src/commons/Utils'
import Product from '../../src/modules/Products/domain/Product'
import { ParamsDTO } from '../../src/modules/Products/map/dto/ParamsDTO'
import { ProductBodyDTO, ProductDTO } from '../../src/modules/Products/map/dto/ProductDTO'
import ProductStatusEnum from '../../src/modules/Products/map/dto/ProductStatusEnum'
import IProductRepo from '../../src/modules/Products/repo/IProductRepo'

export let products: ProductDTO[] = [
  {
    _id: '',
    code: 17,
    status: ProductStatusEnum.PUBLISHED,
    imported_t: '',
    url: '',
    creator: '',
    created_t: 0,
    last_modified_t: 0,
    product_name: '',
    quantity: '',
    brands: '',
    categories: '',
    labels: '',
    purchase_places: '',
    stores: '',
    ingredients_text: '',
    traces: '',
    serving_size: '',
    serving_quantity: 0,
    nutriscore_score: 0,
    nutriscore_grade: '',
    main_category: '',
    image_url: '',
  },
]

export class ProductRepoMock implements IProductRepo {
  async createProduct(product: Record<string, any>): Promise<DefaultResponse> {
    throw new Error('Method not implemented.')
  }
  async removeAllProducts(): Promise<DefaultResponse> {
    throw new Error('Method not implemented.')
  }
  async getProduct(code: number): Promise<Product | []> {
    return []
  }
  async getProducts(params: ParamsDTO): Promise<[] | Product[]> {
    return []
  }
  async deleteProduct(code: number): Promise<DefaultResponse> {
    for (let x = 0; x < products.length; x++) {
      if (products[x].code == code) {
        products[x].status = ProductStatusEnum.TRASH
      }
    }
    return DefaultResponse.OK
  }
  async updateProduct(code: number, data: ProductBodyDTO): Promise<DefaultResponse> {
    for (let x = 0; x < products.length; x++) {
      if (products[x].code == code) {
        Object.assign(products[x], data)
      }
    }
    return DefaultResponse.OK
  }
}
