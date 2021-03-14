export class NotFoundError extends Error {
  constructor () {
    super('Url não encontrada, :/')
    this.name = 'NotFoundError'
  }
}
