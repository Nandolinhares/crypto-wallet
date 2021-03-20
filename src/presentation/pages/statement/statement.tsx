import React, { useState, useEffect } from 'react'
// MUI
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@material-ui/core'
// Styles
import { useStyles } from './statement-styles'
// Table information data
import { columns, Data } from './statement.interface'
// Redux
import { useSelector } from 'react-redux'
import { StatementDefaultHelper } from './statement-default-helper'
import { StatementCryptoToCryptoHelper } from './statement-crypto-to-crypto-helper'

// Função para criação dos itens na tabela
function createData (inputMoneyValue: string, outputMoneyValue: string, bitcoin: string, brita: string, dateStatement: string, statementType?: string): Data {
  return { inputMoneyValue, outputMoneyValue, bitcoin, brita, dateStatement, statementType }
}

const StatementPage: React.FC = () => {
  const classes = useStyles()
  // Global States
  const { user } = useSelector(state => state.user)
  // Local States
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(25)
  const [rows, setRows] = useState([])

  useEffect(() => {
    user.statement.forEach(state => {
      if (state.inputCryptoName === undefined) {
        StatementDefaultHelper(state, setRows, createData)
      } else {
        StatementCryptoToCryptoHelper(state, setRows, createData)
      }
    })
  }, [])

  const handleChangePage = (event: unknown, newPage: number): void => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={Math.random() * 10000}>
                  {columns.map((column) => {
                    const value = row[column.id]
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'string' ? column.format(value.toString()) : value}
                      </TableCell>
                    )
                  })}
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  )
}

export default StatementPage
