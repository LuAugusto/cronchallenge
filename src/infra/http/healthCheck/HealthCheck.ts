import Router from '@koa/router'
import HealthCheckController from './HealthCheckController'

const controller = new HealthCheckController()

export default class HealthCheck {
  private static instance: HealthCheck
  private router: Router

  public static getInstance(): HealthCheck {
    if (!this.instance) {
      this.instance = new HealthCheck()
    }

    return this.instance
  }

  private constructor() {
    this.router = new Router()
    this.CreateRoutes()
  }

  private CreateRoutes(): void {
    this.router.get('/', controller.execute)
  }

  public getRouter(): Router {
    return new Router().use(this.router.routes(), this.router.allowedMethods())
  }
}
