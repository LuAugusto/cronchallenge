import Router from '@koa/router'
import DocsRouter from './rest/docs/DocsRouter'
import ProductRoutes from '../../modules/Products/infra/routes'
import HealthCheck from './healthCheck/HealthCheck'

const router = new Router()
const docsRouter = DocsRouter.getInstance().getRouter()
const productRoutes = ProductRoutes.getInstance().getRouter()
const healthCheck = HealthCheck.getInstance().getRouter()

router.prefix('/api')

router.use(docsRouter.routes())
router.use('/products', productRoutes.routes())
router.use('/health-check', healthCheck.routes())

export default router
