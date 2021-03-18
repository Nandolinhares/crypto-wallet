import React from 'react'
// MUI
import { Button } from '@material-ui/core'
// Styles
import { CssTextField, useStyles } from './input-money-styles'

type Props = {
  qtdValue: number
  setQtdValue: any
  stateSelected: number
}

const InputMoney: React.FC<Props> = ({ qtdValue, setQtdValue, stateSelected }: Props) => {
  const classes = useStyles()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement> & React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>): void => {
    setQtdValue(event.target.value)
  }

  return (
    <form className={classes.sectionInput}>
      <CssTextField
        className={classes.inputMoney}
        placeholder="Quantidade em dinheiro"
        variant="outlined"
        id="custom-css-outlined-input"
        onChange={handleChange}
        value={qtdValue || ''}
        type="number"
        required
        // error={errorState.error}
        // helperText={errorState.error ? errorState.helperText : ''}
      />
      <Button type="submit" variant="contained" color="primary" className={classes.buttonAction}>{stateSelected === 0 ? 'COMPRAR' : 'VENDER'}</Button>
    </form>
  )
}

export default InputMoney
