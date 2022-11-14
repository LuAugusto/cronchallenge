import AbstractError from '../../../../../commons/errors/AbstractError'

export default class UpdateProductError extends AbstractError {
  constructor() {
    super('update product error', 500, 'An error ocurred trying to update a product', 'error')
  }
}
