import { Context } from 'koa'

import APILogger from '../../../commons/APILogger'

const logger = APILogger.getInstance()

export default class LogRequestsMiddlewares {
  private static instance: LogRequestsMiddlewares

  public static getInstance(): LogRequestsMiddlewares {
    if (!this.instance) {
      this.instance = new LogRequestsMiddlewares()
    }

    return this.instance
  }

  public async execute({ request }: Context, next: () => Promise<unknown>): Promise<void> {
    logger.info('Request received', request)

    await next()
  }
}
