import React from 'react'
// MUI
import { Button } from '@material-ui/core'
// Styles
import { CssTextField, useStyles } from './input-money-styles'
// import CurrencyFormat from 'react-currency-format'

type Props = {
  qtdValue: any
  stateSelected: number
  handleInputMoneyChange: any
  handleSubmit: any
}

const InputMoney: React.FC<Props> = ({ ...props }: Props) => {
  const classes = useStyles()

  return (
    <form onSubmit={props.handleSubmit} className={classes.sectionInput}>
      <CssTextField
        className={classes.inputMoney}
        placeholder="Quantidade em dinheiro"
        variant="outlined"
        id="custom-css-outlined-input"
        onChange={props.handleInputMoneyChange}
        value={props.qtdValue || ''}
        type="number"
        required
        defaultValue={0}
        // error={errorState.error}
        // helperText={errorState.error ? errorState.helperText : ''}
      />
      <Button type="submit" variant="contained" color="primary" className={classes.buttonAction}>{props.stateSelected === 0 ? 'COMPRAR' : 'VENDER'}</Button>
    </form>
  )
}

export default InputMoney
