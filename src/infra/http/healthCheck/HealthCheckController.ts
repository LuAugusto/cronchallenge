import MongoDBConnection from '../../mongodb/MongoDBConnection'
import APILogger from '../../../commons/APILogger'
import { ParameterizedContext } from 'koa'
import { DefaultResponse } from '../../../commons/Utils'

const logger = APILogger.getInstance()
const db = MongoDBConnection.getInstance().makeConnection()

export default class HealthCheckController {
  public async execute({ request, response }: ParameterizedContext) {
    const importHistory = await (await db).collection('history_imports').findOne()
    logger.info('Connection health-check', request)
    response.status = 200
    response.body = { imports: importHistory }
  }
}
