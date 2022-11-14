import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import cors from '@koa/cors'
import router from './http/router'
import LogRequestMiddleware from '../infra/http/middlewares/LogRequestsMiddlewares'
import RouterErrorMiddleware from '../infra/http/middlewares/RouterErrorMiddleware'

const logRequestMiddleware = LogRequestMiddleware.getInstance()
const routerErrorMiddleware = RouterErrorMiddleware.getInstance()

export default class App {
  private static instance: App

  public static getInstance(): App {
    if (!this.instance) {
      this.instance = new App()
    }
    return this.instance
  }

  private app: Koa

  private constructor() {
    this.app = new Koa()
    this.setup()
  }

  private setup(): void {
    this.app.use(bodyParser())
    this.app.use(logRequestMiddleware.execute)
    //this.app.use(routerErrorMiddleware.execute.bind(routerErrorMiddleware))
    this.app.use(cors())
    this.app.use(router.routes())
  }

  public getApp(): Koa {
    return this.app
  }
}
