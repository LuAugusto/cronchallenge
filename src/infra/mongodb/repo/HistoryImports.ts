import MongoDBConnection from '../../../infra/mongodb/MongoDBConnection'
import { DefaultResponse } from '../../../commons/Utils'
import { IHistoryImports } from './IHistoryImports'
import moment from 'moment-timezone'

const db = MongoDBConnection.getInstance().makeConnection()

export default class HistoryImports implements IHistoryImports {
  public async setImportTime(): Promise<DefaultResponse> {
    const dateImport = moment().tz('America/Sao_Paulo').toString()
    await (await db).collection('history_imports').insertOne({ dateImport })

    return DefaultResponse.OK
  }
}
