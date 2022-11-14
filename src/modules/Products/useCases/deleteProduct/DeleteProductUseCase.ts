import DeleteProduct from './DeleteProduct'
import ProductRepo from '../../repo/ProductRepo'
import DeleteProductController from './DeleteProductController'

const deleteProduct = new DeleteProduct(new ProductRepo())
const deleteProductController = new DeleteProductController(deleteProduct)

export { deleteProduct, deleteProductController }
