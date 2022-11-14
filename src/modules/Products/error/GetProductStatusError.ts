import { IApiError } from '../../../commons/errors/IApiError'
import DefaultError from '../../../commons/errors/DefaultError'
import AbstractAPIError from '../../../commons/errors/AbstractError'
import { GetProductError, GetProductNotFoundError } from './GetProductError'

export default class ProductStatusError {
  public static create(error: IApiError): AbstractAPIError {
    if (error instanceof AbstractAPIError) return error

    switch (error.status) {
      case 500:
        return new GetProductError()
      case 404:
        return new GetProductNotFoundError()
      default:
        return new DefaultError()
    }
  }
}
