import UpdateProduct from '../src/modules/Products/useCases/updateProduct/UpdateProduct'
import DeleteProduct from '../src/modules/Products/useCases/deleteProduct/DeleteProduct'
import GetProducts from '../src/modules/Products/useCases/getProducts/GetProducts'
import Product from '../src/modules/Products/domain/Product'
import { getProducts } from '../src/modules/Products/useCases/getProducts/GetProductsUseCase'
import { getProduct } from '../src/modules/Products/useCases/getProduct/GetProductUseCase'
import { ProductRepoMock, products } from './mocks/ProductRepoMock'
import { ParamsDTO } from '../src/modules/Products/map/dto/ParamsDTO'
import { ProductBodyDTO } from '../src/modules/Products/map/dto/ProductDTO'

const query: ParamsDTO = {
  limit: 3,
  offset: 1,
}

const query2: ParamsDTO = {
  limit: 4,
  offset: 1,
}

const code: number = 17

const body: ProductBodyDTO = {
  product_name: 'teste',
}

describe('Products', () => {
  it('Should return a list of products', async () => {
    const products = await getProducts.execute(query)

    expect(products).toBeInstanceOf(Array<Product>)
    expect(products).toHaveLength(3)
  })
  it('Should return a void array if not exist products to list', async () => {
    const getProducts = new GetProducts(new ProductRepoMock())

    const products = await getProducts.execute(query)

    expect(products).toBeInstanceOf(Array)
    expect(products).toEqual([])
  })
  it('Should be able to apply pagination', async () => {
    const products = await getProducts.execute(query2)

    expect(products).toHaveLength(4)
  })
  it('Should return a product', async () => {
    const product = await getProduct.execute(code)

    expect(product).toBeInstanceOf(Product)
  })
  it('Should return a product that contains the respective code', async () => {
    const product = await getProduct.execute(code)

    expect(product).toMatchObject(expect.objectContaining({ code: code }))
  })
  it('Should be able to update a product', async () => {
    const update = new UpdateProduct(new ProductRepoMock())

    await update.execute(code, body)
    let product = {}
    for (let x = 0; x < products.length; x++) {
      if (products[x].code == code) {
        product = products[x]
      }
    }

    expect(product).toMatchObject(expect.objectContaining({ product_name: 'teste' }))
  })
  it('Should be able to set trash status on a product', async () => {
    const remove = new DeleteProduct(new ProductRepoMock())

    await remove.execute(code)
    let product = {}
    for (let x = 0; x < products.length; x++) {
      if (products[x].code == code) {
        product = products[x]
      }
    }

    expect(product).toMatchObject(expect.objectContaining({ status: 'trash' }))
  })
})
