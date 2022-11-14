import AbstractError from '../../commons/errors/AbstractError'
import { MongoNotConnectedError } from 'mongodb'

export default class MongoConnectionError extends AbstractError {
  constructor(error: Error) {
    super('mongo connection error', 500, error.message, 'Mongo Error')
  }

  public throwError() {
    return new MongoNotConnectedError(this.message)
  }
}
