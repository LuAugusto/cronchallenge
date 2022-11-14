import MongoDBConnection from '../../mongodb/MongoDBConnection'
import APILogger from '../../../commons/APILogger'
import { ParameterizedContext } from 'koa'
import { DefaultResponse } from '../../../commons/Utils'

const logger = APILogger.getInstance()

export default class HealthCheckController {
  public async execute({ request, response }: ParameterizedContext) {
    const db = MongoDBConnection.getInstance()
      .makeConnection()
      .then((response) => {
        logger.info('Connection', { request })
      })
      .catch((error: Error) => {
        logger.error('Connection error', error)
        throw error
      })

    response.status = 200
    response.body = DefaultResponse.SUCCESS
  }
}
