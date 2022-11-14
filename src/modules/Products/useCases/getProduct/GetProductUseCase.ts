import GetProduct from './GetProduct'
import GetProductController from './GetProductController'
import ProductRepo from '../../repo/ProductRepo'

const getProduct = new GetProduct(new ProductRepo())
const getProductController = new GetProductController(getProduct)

export { getProduct, getProductController }
