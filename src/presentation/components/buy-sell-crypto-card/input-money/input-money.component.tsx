import React from 'react'
// MUI
import { Button } from '@material-ui/core'
// Styles
import { CssTextField, useStyles } from './input-money-styles'
// import CurrencyFormat from 'react-currency-format'

type Props = {
  qtdValue: any
  stateSelected?: number
  handleInputMoneyChange: any
  handleSubmit: any
  changeCrypto?: boolean
}

const InputMoney: React.FC<Props> = ({ ...props }: Props) => {
  const classes = useStyles()

  return (
    <form data-testid="submit-input-money" onSubmit={props.handleSubmit} className={classes.sectionInput}>
      <CssTextField
        className={classes.inputMoney}
        placeholder="Quantidade em dinheiro"
        variant="outlined"
        id={props.changeCrypto ? 'change-crypto-input' : 'buy-sell-input'}
        onChange={props.handleInputMoneyChange}
        value={props.qtdValue || ''}
        type="number"
        required
        inputProps={{ 'data-testid': 'input-money' }}
        // error={errorState.error}
        // helperText={errorState.error ? errorState.helperText : ''}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        className={classes.buttonAction}
        id={props.stateSelected === 0 ? 'buttonSubmitBuy' : (props.stateSelected === 1 ? 'buttonSubmitSell' : 'buttonChangeSubmit')}
      >
        {!props.changeCrypto
          ? (
              props.stateSelected === 0 ? 'COMPRAR' : 'VENDER'
            )
          : 'TROCAR CRIPTOMOEDAS'
        }
      </Button>
    </form>
  )
}

export default InputMoney
