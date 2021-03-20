export type StatementModel = {
  dateStatement: string
  inputMoneyValue?: string
  outputMoneyValue?: string
  inputCryptoName?: string
  outputCryptoName?: string
  inputCryptoValue?: string
  outputCryptoValue?: string
  outputCryptoUpdated?: string
  statementType: 'COMPRA' | 'VENDA' | 'BITCOIN-BRITA' | 'BRITA-BITCOIN'
}
