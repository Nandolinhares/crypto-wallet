import { StatementModel } from '../../../domain/models/statement/statement-model'

type PrepareStatementType = {
  inputMoneyValue: string
  outputMoneyValue: string
  outputCryptoName: string
  outputCryptoValue: string
  outputCryptoUpdated: string
  statementType: 'COMPRA' | 'VENDA' | 'BITCOIN-BRITA' | 'BRITA-BITCOIN'
}

export const PrepareStatement = (params: PrepareStatementType): StatementModel => {
  return {
    dateStatement: new Date().toISOString().split('T')[0],
    inputMoneyValue: params.inputMoneyValue,
    outputMoneyValue: params.outputMoneyValue,
    outputCryptoName: params.outputCryptoName,
    outputCryptoValue: params.outputCryptoValue,
    outputCryptoUpdated: params.outputCryptoUpdated,
    statementType: params.statementType
  }
}
