import React from 'react'
// MUI
import { RadioGroup, FormControlLabel, FormControl } from '@material-ui/core'
// Styles
import { GreenRadio, useStyles } from './select-crypto-styles'

type Props = {
  cryptoSelected: string
  setCryptoSelected: any
}

const SelectCrypto: React.FC<Props> = ({ cryptoSelected, setCryptoSelected }: Props) => {
  const classes = useStyles()

  // Change the crypto selected
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>): any => {
    setCryptoSelected(event.target.value as string)
  }

  return (
    <FormControl component="fieldset">
      <p className={classes.radioTitle}>Criptomoedas</p>
      <RadioGroup aria-label="gender" name="gender1" value={cryptoSelected} onChange={handleChange} row>
        <FormControlLabel id="radio-bitcoin" className={classes.formControlLabel} value="bitcoin" control={<GreenRadio />} label="Bitcoin" />
        <FormControlLabel id="radio-brita" className={classes.formControlLabel} value="brita" control={<GreenRadio />} label="Brita" />
      </RadioGroup>
    </FormControl>
  )
}

export default SelectCrypto
