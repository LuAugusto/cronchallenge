import UpdateProduct from './UpdateProduct'
import UpdateProductController from './UpdateProductController'
import ProductRepo from '../../repo/ProductRepo'

const updateProduct = new UpdateProduct(new ProductRepo())
const updateProductController = new UpdateProductController(updateProduct)

export { updateProduct, updateProductController }
