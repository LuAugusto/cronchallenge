import { Context } from 'koa'

import NotFoundError from '../../../commons/errors/NotFoundError'
import APILogger from '../../../commons/APILogger'

const logger = APILogger.getInstance()

export default class RouterErrorMiddleware {
  private static instance: RouterErrorMiddleware

  public static getInstance(): RouterErrorMiddleware {
    if (!this.instance) {
      this.instance = new RouterErrorMiddleware(new NotFoundError('Route not found', '404'))
    }
    return this.instance
  }

  constructor(private notFoundError: NotFoundError) {}

  public execute({ response }: Context): void {
    logger.error(this.notFoundError.message, this.notFoundError)

    response.status = this.notFoundError.status
    response.body = {
      code: this.notFoundError.code,
      message: this.notFoundError.message,
    }
  }
}
