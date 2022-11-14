import AbstractError from '../../../../../commons/errors/AbstractError'

export default class DeleteProductError extends AbstractError {
  constructor() {
    super('delete product error', 500, 'An error ocurred trying delete a product', 'error')
  }
}
