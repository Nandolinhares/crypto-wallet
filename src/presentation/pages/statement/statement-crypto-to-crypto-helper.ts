export const StatementCryptoToCryptoHelper = (state: any, setRows: any, createData: any): any => {
  switch (state.inputCryptoName) {
    case 'bitcoin':
      setRows(
        prev => [...prev, createData(
          '0',
          '0',
          state.inputCryptoValue,
          state.outputCryptoValue,
          state.dateStatement,
          state.statementType
        )]
      )
      break
    case 'brita':
      setRows(
        prev => [...prev, createData(
          '0',
          '0',
          state.outputCryptoValue,
          state.inputCryptoValue,
          state.dateStatement,
          state.statementType
        )]
      )
      break
    default:
      break
  }
}
