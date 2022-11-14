import AbstractError from './AbstractError'

export default class NotFoundError extends AbstractError {
  constructor(message: string, code: string) {
    super(code, 404, message, 'Not Found')
  }
}
