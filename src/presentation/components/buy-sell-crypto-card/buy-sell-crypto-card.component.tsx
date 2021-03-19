import React, { useState, useEffect } from 'react'
// MUI
import { Paper } from '@material-ui/core'
// Styles
import { useStyles } from './buy-sell-crypto-card-styles'
import SelectCrypto from './select-crypto/select-crypto.component'
import SelectBuySellButton from './select-buy-sell-button/select-buy-sell-button.component'
import InputMoney from './input-money/input-money.component'
// Helpers
import { ConvertRealToCrypto } from '../../helpers/crypto-helpers/convert-real-to-crypto'
import { ConvertCryptoStringToCoin } from '../../helpers/crypto-helpers/convert-crypto-string-to-coin'
import { PrepareCheckout } from '../../helpers/prepare-checkout/prepare-checkout'
// Redux
import { useSelector, useDispatch } from 'react-redux'
// Actions
import { CheckoutUser } from '../../redux/actions/user-actions'

const BuySellCryptoCard: React.FC = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  // Global State
  const { user } = useSelector(state => state.user)
  const { bitcoin, brita } = useSelector(state => state.crypto)
  // Local States
  // Compra ou Venda
  const [stateSelected, setStateSelected] = useState<number>(0)
  // Bitcoin ou Brita
  const [cryptoSelected, setCryptoSelected] = useState<string>('bitcoin')
  // Valor total do input
  const [qtdValue, setQtdValue] = useState<any>('')
  // Espelhamento do bitcoin e da brita quando o qtdValue mudar
  const [cryptoMirror, setCriptoMirror] = useState({
    bitcoin: 0,
    brita: 0
  })

  useEffect(() => {
    setCriptoMirror({
      bitcoin: ConvertRealToCrypto(qtdValue || 0, bitcoin) || 0,
      brita: ConvertRealToCrypto(qtdValue || 0, brita) || 0
    })
  }, [bitcoin, brita, qtdValue])

  // Input Money change
  const handleInputMoneyChange = (event: React.ChangeEvent<HTMLInputElement> & React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>): void => {
    setQtdValue(event.target.value)
  }

  // Checkout
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    const checkoutInformation = PrepareCheckout({
      cryptoName: cryptoSelected,
      cryptoPrice: cryptoSelected === 'bitcoin' ? bitcoin : brita,
      qtdValue,
      stateSelected,
      user
    })
    // Actions to make Checkout
    dispatch(CheckoutUser(checkoutInformation.data))
  }

  return (
    <Paper className={classes.paper}>
      <section className={classes.mainSection}>
        <SelectCrypto cryptoSelected={cryptoSelected} setCryptoSelected={setCryptoSelected} />
        <section>
          <h2>{cryptoSelected}</h2>
          {/* Select Buy or Sell */}
          <SelectBuySellButton stateSelected={stateSelected} setStateSelected={setStateSelected} />
          {/* Value to buy a crypto */}
          <InputMoney
            qtdValue={qtdValue}
            stateSelected={stateSelected}
            handleInputMoneyChange={handleInputMoneyChange}
            handleSubmit={handleSubmit} />
          <div className={classes.bitcoinRealTime}>
            {/* Applying mask to show bitcoins and Britas */}
            <h3>Valor em Bitcoin {ConvertCryptoStringToCoin(cryptoMirror.bitcoin.toString())}</h3>
            <h3>Valor em Brita {ConvertCryptoStringToCoin(cryptoMirror.brita.toString())}</h3>
          </div>
        </section>
        <section>
          teste
        </section>
      </section>
    </Paper>
  )
}

export default BuySellCryptoCard
