import IProductRepo from './IProductRepo'
import MongoDBConnection from '../../../infra/mongodb/MongoDBConnection'
import Product from '../domain/Product'
import ProductMapper from '../map/ProductMapper'
import { DefaultResponse } from '../../../commons/Utils'
import { ParamsDTO } from '../map/dto/ParamsDTO'
import { ProductBodyDTO } from '../map/dto/ProductDTO'

const db = MongoDBConnection.getInstance().makeConnection()

export default class ProductRepo implements IProductRepo {
  public async createProduct(product: Record<string, unknown>[]): Promise<DefaultResponse> {
    await (await db).collection('products').insertMany(product)

    return DefaultResponse.OK
  }

  public async removeAllProducts(): Promise<DefaultResponse> {
    await (await db).collection('products').deleteMany({ _id: { $exists: true } })

    return DefaultResponse.OK
  }

  public async getProduct(code: number): Promise<Product | []> {
    const request = await (await db).collection('products').findOne({ code: Number(code) })
    if (!request) {
      return []
    }
    const product = ProductMapper.toDomain(request)
    return product
  }

  public async getProducts(params: ParamsDTO): Promise<Product[] | []> {
    const { limit = 10, offset = 1 } = params

    const request = await (
      await db
    )
      .collection('products')
      .find({})
      .skip(Number(offset) - 1)
      .limit(Number(limit))
      .toArray()
    if (!request) {
      return []
    }

    const products = request.map((product) => ProductMapper.toDomain(product))

    return products
  }

  public async deleteProduct(code: number): Promise<DefaultResponse> {
    await (await db).collection('products').updateOne({ code: Number(code) }, { $set: { status: 'trash' } })

    return DefaultResponse.OK
  }

  public async updateProduct(code: number, data: ProductBodyDTO): Promise<DefaultResponse> {
    await (await db).collection('products').updateOne({ code: Number(code) }, { $set: data })

    return DefaultResponse.OK
  }
}
