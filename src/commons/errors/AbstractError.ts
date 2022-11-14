export default abstract class AbstractError extends Error {
  constructor(public code: string, public status: number, message: string, name = 'Error') {
    super()

    this.name = name
    this.message = message
  }
}
