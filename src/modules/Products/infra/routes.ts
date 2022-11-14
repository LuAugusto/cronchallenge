import Router from '@koa/router'
import ProductRoutesEnum from './routesEnum'
import FetchProductFilesController from '../useCases/fetchProductFiles/FetchProductFiles'
import { getProductController } from '../useCases/getProduct/GetProductUseCase'
import { getProductsController } from '../useCases/getProducts/GetProductsUseCase'
import { deleteProductController } from '../useCases/deleteProduct/DeleteProductUseCase'
import { updateProductController } from '../useCases/updateProduct/UpdateProductUseCase'

const fetchProductFilesController = new FetchProductFilesController()

export default class ProductRoutes {
  private static instance: ProductRoutes
  private router: Router

  public static getInstance(): ProductRoutes {
    if (!this.instance) {
      this.instance = new ProductRoutes()
    }

    return this.instance
  }

  private constructor() {
    this.router = new Router()
    this.CreateRoutes()
  }

  private CreateRoutes(): void {
    this.router
      .get(ProductRoutesEnum.FETCH_PRODUCT_FILE, fetchProductFilesController.execute)
      .get(ProductRoutesEnum.GET_PRODUCT, getProductController.execute.bind(getProductController))
      .get(ProductRoutesEnum.GET_PRODUCTS, getProductsController.execute.bind(getProductsController))
      .delete(ProductRoutesEnum.DELETE_PRODUCT, deleteProductController.execute.bind(deleteProductController))
      .put(ProductRoutesEnum.UPDATE_PRODUCT, updateProductController.execute.bind(updateProductController))
  }

  public getRouter(): Router {
    return new Router().use(this.router.routes(), this.router.allowedMethods())
  }
}
