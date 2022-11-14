import logger, { Logger } from 'pino'
import ecsFormat from '@elastic/ecs-pino-format'
import { GenericObject } from '../commons/Utils'

export default class APILogger {
  private static instance: APILogger

  public static getInstance(): APILogger {
    if (!this.instance) {
      this.instance = new APILogger(logger(ecsFormat()))
    }

    return this.instance
  }

  private constructor(private logger: Logger) {}

  public info(message: string, info: GenericObject): void {
    this.logger.info(info, message)
  }

  public error(message: string, error: Error): void {
    this.logger.error(error, message)
  }
}
