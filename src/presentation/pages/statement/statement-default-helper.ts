export const StatementDefaultHelper = (state: any, setRows: any, createData: any): any => {
  switch (state.outputCryptoName) {
    case 'bitcoin':
      setRows(
        prev => [...prev, createData(
          state.inputMoneyValue,
          state.outputMoneyValue,
          state.outputCryptoValue,
          '0',
          state.dateStatement,
          state.statementType
        )]
      )
      break
    case 'brita':
      setRows(
        prev => [...prev, createData(
          state.inputMoneyValue,
          state.outputMoneyValue,
          '0',
          state.outputCryptoValue,
          state.dateStatement,
          state.statementType
        )]
      )
      break
    default:
      break
  }
}
