import { StatementModel } from '../../../domain/models/statement/statement-model'

type PrepareChangeCryptosStatementType = {
  inputCryptoName: string
  outputCryptoName: string
  inputCryptoValue: string
  outputCryptoValue: string
  statementType?: any
}

export const PrepareChangeCryptosStatement = (params: PrepareChangeCryptosStatementType): StatementModel => {
  return {
    dateStatement: new Date().toISOString().split('T')[0],
    inputCryptoName: params.inputCryptoName,
    outputCryptoName: params.outputCryptoName,
    inputCryptoValue: params.inputCryptoValue,
    outputCryptoValue: params.outputCryptoValue,
    statementType: params.statementType
  }
}
