export class UnexpectedError extends Error {
  constructor () {
    super('Erro interno, verifique sua conexão com a internet')
    this.name = 'UnexpectedError'
  }
}
