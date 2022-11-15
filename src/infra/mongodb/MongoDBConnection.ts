import { MongoClient, Collection, Db } from 'mongodb'
import Config from '../../commons/config/Config'
import { DB_URL, DB_NAME } from '../../commons/config/Contants'
import MongoConnectionError from './MongoDBConnectionError'
import APILogger from '../../commons/APILogger'

const config = Config.getInstance()
const logger = APILogger.getInstance()

export default class MongoDBConnection {
  private static instance: MongoDBConnection
  //public connection: any

  public static getInstance(): MongoDBConnection {
    if (!this.instance) {
      this.instance = new MongoDBConnection()
    }

    return this.instance
  }

  public async makeConnection() {
    const url = config.getValue(DB_URL)
    const dbName = config.getValue(DB_NAME)
    try {
      const connection = new MongoClient(url)

      await connection.connect()

      const db: Db = connection.db(dbName)

      return db
    } catch (error) {
      const connectionError = new MongoConnectionError(<Error>error)
      logger.error('Mongodb connection error', connectionError)
      throw connectionError.throwError()
    }
  }
}
