class RequesterError extends Error {
  constructor(public status: number, public message = 'Requester error') {
    super()

    this.name = 'Requester Error'
  }
}

interface IAPIError {
  code: string
  name?: string
  status: number
  message: string
}

export { IAPIError, RequesterError }
