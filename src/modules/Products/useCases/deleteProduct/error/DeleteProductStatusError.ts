import { IApiError } from '../../../../../commons/errors/IApiError'
import DefaultError from '../../../../../commons/errors/DefaultError'
import AbstractAPIError from '../../../../../commons/errors/AbstractError'
import DeleteProductError from './DeleteProductError'

export default class DeleteProductStatusError {
  public static create(error: IApiError): AbstractAPIError {
    if (error instanceof AbstractAPIError) return error

    switch (error.status) {
      case 500:
        return new DeleteProductError()
      default:
        return new DefaultError()
    }
  }
}
