export type GenericObject = Record<string, any>

export function getBody(request: Request) {
  const body = request.body

  return body
}

export enum DefaultResponse {
  SUCCESS = 'success',
  ERROR = 'Error',
  OK = 'ok',
}
