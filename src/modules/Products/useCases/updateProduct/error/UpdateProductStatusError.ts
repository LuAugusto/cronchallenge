import { IApiError } from '../../../../../commons/errors/IApiError'
import DefaultError from '../../../../../commons/errors/DefaultError'
import AbstractAPIError from '../../../../../commons/errors/AbstractError'
import UpdateProductError from './UpdateProductError'

export default class UpdateProductStatusError {
  public static create(error: IApiError): AbstractAPIError {
    if (error instanceof AbstractAPIError) return error

    switch (error.status) {
      case 500:
        return new UpdateProductError()
      default:
        return new DefaultError()
    }
  }
}
