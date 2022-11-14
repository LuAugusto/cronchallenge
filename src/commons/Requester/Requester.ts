import axios, { AxiosRequestHeaders, AxiosError } from 'axios'
import { RequesterError, IAPIError } from './RequesterError'

import APILogger from '../../commons/APILogger'

export enum Method {
  DELETE = 'DELETE',
  POST = 'POST',
  GET = 'GET',
  PUT = 'PUT',
  PATCH = 'PATCH',
}

const logger = APILogger.getInstance()

function getFormattedQuery(queryStr: string, key: string, value: unknown): string {
  if (typeof value == 'undefined') return ''

  const keyValue = `${key}=${value}`

  if (queryStr) return `&${keyValue}`

  return keyValue
}

export default class Requester {
  private body?: string

  constructor(private url: string, private headers: Record<string, unknown> = {}, private method: Method = Method.GET) {
    this.url = url
    this.headers = headers
  }

  // public setQuery<T>(query: T): Requester {
  //   const queryURL = Object.keys(query).reduce(
  //     (queryStr: string, queryKey: string) =>
  //       `${queryStr}${getFormattedQuery(queryStr, queryKey, query[queryKey as keyof T])}`,
  //     ''
  //   )

  //   if (queryURL) {
  //     this.url += `?${queryURL}`
  //   }

  //   return this
  // }

  public setBody<T>(body: T): Requester {
    this.body = JSON.stringify(body)

    return this
  }

  private gehHeaders(): AxiosRequestHeaders {
    return {
      'Content-Type': 'application/json',
      'Accept-Encoding': 'gzip, deflate, br',
      responseType: 'buffer',
      ...this.headers,
    }
  }

  public async fetch<T>(): Promise<T> {
    logger.info(`Requester fetch: ${this.url}`, {
      body: this.body,
      method: this.method,
    })

    try {
      console.log({
        url: this.url,
        headers: this.gehHeaders(),
        data: this.body,
        method: this.method,
      })
      const { data } = await axios({
        url: this.url,
        headers: this.gehHeaders(),
        data: this.body,
        method: this.method,
      })

      return data
    } catch (error) {
      const { status, message } = <IAPIError>(error as AxiosError).toJSON()

      throw new RequesterError(status, message)
    }
  }
}
