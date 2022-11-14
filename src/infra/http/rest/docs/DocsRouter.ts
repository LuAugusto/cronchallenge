import Router from '@koa/router'
import { koaSwagger } from 'koa2-swagger-ui'
import yamljs from 'yamljs'
import DocsEnum from './DocsEnum'

const spec = yamljs.load('./docs/openapi.yaml')

export default class DocsRouter {
  private static instance: DocsRouter
  private router: Router

  public static getInstance(): DocsRouter {
    if (!this.instance) {
      this.instance = new DocsRouter()
    }

    return this.instance
  }

  private constructor() {
    this.router = new Router()
    this.CreateRoutes()
  }

  private CreateRoutes(): void {
    this.router.get(DocsEnum.DOCS, koaSwagger({ routePrefix: false, swaggerOptions: { spec } }))
  }

  public getRouter(): Router {
    return new Router().use(this.router.routes(), this.router.allowedMethods())
  }
}
