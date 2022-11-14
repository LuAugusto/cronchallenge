import GetProducts from './GetProducts'
import ProductRepo from '../../repo/ProductRepo'
import GetProductsController from './GetProductsController'

const getProducts = new GetProducts(new ProductRepo())
const getProductsController = new GetProductsController(getProducts)

export { getProducts, getProductsController }
