import React, { useState, useEffect } from 'react'
// MUI
import { Paper } from '@material-ui/core'
// Styles
import { useStyles } from './wallet-card-styles'
import { ConvertCryptoStringToCoin } from '../../helpers/crypto-helpers/convert-crypto-string-to-coin'

type Props = {
  type: string
  value: string
}

const WalletCard: React.FC<Props> = ({ type, value }: Props) => {
  const classes = useStyles()
  const [newValue, setNewValue] = useState('')
  const [coinName, setCoinName] = useState('')

  useEffect(() => {
    switch (type) {
      case 'money':
        setNewValue(ConvertCryptoStringToCoin(value))
        setCoinName('Reais')
        break
      case 'bitcoin':
        setNewValue(ConvertCryptoStringToCoin(value, 'BTC'))
        setCoinName('Bitcoins')
        break
      default:
        setNewValue(ConvertCryptoStringToCoin(value, 'USD'))
        setCoinName('Britas')
    }
  }, [])

  return (
    <Paper elevation={3} className={`${classes.paper} ${type === 'money' ? classes.money : (type === 'bitcoin' ? classes.bitcoin : classes.general)}`}>
      <h2>MEU SALDO - {coinName} </h2>
      <h2>{newValue}</h2>
    </Paper>
  )
}

export default WalletCard
