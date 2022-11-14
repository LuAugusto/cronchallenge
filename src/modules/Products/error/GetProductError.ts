import AbstractError from '../../../commons/errors/AbstractError'

export class GetProductError extends AbstractError {
  constructor() {
    super('get product error', 500, 'An error ocurred trying get product', 'error')
  }
}
export class GetProductNotFoundError extends AbstractError {
  constructor() {
    super('product not found', 404, 'An error ocurred trying get product', 'not found error')
  }
}
