import React, { useState } from 'react'
// MUI
import { Paper } from '@material-ui/core'
// Styles
import { useStyles } from './buy-sell-crypto-card-styles'
import SelectCrypto from './select-crypto/select-crypto.component'
import SelectBuySellButton from './select-buy-sell-button/select-buy-sell-button.component'
import InputMoney from './input-money/input-money.component'

const BuySellCryptoCard: React.FC = () => {
  const classes = useStyles()
  // Local States
  const [stateSelected, setStateSelected] = useState<number>(0)
  const [cryptoSelected, setCryptoSelected] = useState<string>('bitcoin')
  const [qtdValue, setQtdValue] = useState<number>(0)

  return (
    <Paper className={classes.paper}>
      <section className={classes.mainSection}>
        <SelectCrypto cryptoSelected={cryptoSelected} setCryptoSelected={setCryptoSelected} />
        <section>
          <h2>{cryptoSelected}</h2>
          {/* Select Buy or Sell */}
          <SelectBuySellButton stateSelected={stateSelected} setStateSelected={setStateSelected} />
          {/* Value to buy a crypto */}
          <InputMoney qtdValue={qtdValue} setQtdValue={setQtdValue} stateSelected={stateSelected} />
         <h2>{qtdValue}</h2>
        </section>
        <section>
          teste
        </section>
      </section>
    </Paper>
  )
}

export default BuySellCryptoCard
