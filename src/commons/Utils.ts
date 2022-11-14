import { gzip } from 'node-gzip'

export type GenericObject = Record<string, any>

export function getBody(request: Request) {
  const body = request.body

  return body
}

export async function decompressedFiles(file: Buffer) {
  return await gzip(file).then((result) => console.log(result))
}

export enum DefaultResponse {
  SUCCESS = 'success',
  ERROR = 'Error',
  OK = 'ok',
}
