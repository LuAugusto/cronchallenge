import AbstractError from './AbstractError'

export default class DefaultError extends AbstractError {
  constructor() {
    super('internal_server_error', 500, 'Internal Error', 'Internal Error')
  }
}
