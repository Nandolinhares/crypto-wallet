import React, { useState, useEffect } from 'react'
// MUI
import { Paper } from '@material-ui/core'
// Styles
import { useStyles } from './change-crypto-card-styles'
import SelectCrypto from './select-crypto/select-crypto.component'
import InputMoney from '../buy-sell-crypto-card/input-money/input-money.component'
// Helpers
import { ConvertRealToCrypto } from '../../helpers/crypto-helpers/convert-real-to-crypto'
import { ConvertCryptoStringToCoin } from '../../helpers/crypto-helpers/convert-crypto-string-to-coin'
// Redux
import { useSelector, useDispatch } from 'react-redux'
// Actions
import { ConvertCryptoToCrypto } from '../../helpers/crypto-helpers/convert-crypto-to-crypto'
import { PrepareChangeCryptos } from '../../helpers/prepare-change-cryptos/prepare-change-cryptos'
import DialogCheckout from '../dialog-checkout/dialog-checkout.component'
import { CheckoutUser } from '../../redux/actions/user-actions'

const ChangeCryptoCard: React.FC = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  // Global State
  const { user } = useSelector(state => state.user)
  const { bitcoin, brita } = useSelector(state => state.crypto)
  // Local States
  // Bitcoin ou Brita
  const [cryptoSelected, setCryptoSelected] = useState<string>('bitcoin')
  // Valor total do input
  const [qtdValue, setQtdValue] = useState<any>('')
  // Espelhamento do bitcoin e da brita quando o qtdValue mudar
  const [cryptoMirror, setCriptoMirror] = useState({
    bitcoin: 0,
    brita: 0
  })
  // Controlled state of dialog message
  const [openDialogInformation, setOpenDialogInformation] = useState({
    error: false,
    message: '',
    open: false
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
    const { cryptoOutputValue, cryptoInputValue } = ConvertCryptoToCrypto({
      money: qtdValue,
      cryptoToConvert: cryptoSelected === 'bitcoin' ? bitcoin : brita,
      cryptoDefault: cryptoSelected === 'bitcoin' ? brita : bitcoin
    })

    const { message, approved, userUpdated } = PrepareChangeCryptos({
      user,
      cryptoOutputName: cryptoSelected === 'bitcoin' ? 'bitcoin' : 'brita',
      cryptoInputName: cryptoSelected === 'bitcoin' ? 'brita' : 'bitcoin',
      cryptoOutputValue,
      cryptoInputValue,
      qtdValue
    })

    if (approved) {
      dispatch(CheckoutUser(userUpdated))
      setOpenDialogInformation({
        error: false,
        message,
        open: true
      })
    } else {
      setOpenDialogInformation({
        error: true,
        message,
        open: true
      })
    }
  }

  return (
    <Paper className={classes.paper}>
      <section className={classes.mainSection}>
        <SelectCrypto cryptoSelected={cryptoSelected} setCryptoSelected={setCryptoSelected} />
        <section className={classes.wrapSection}>
          <h2>{cryptoSelected}</h2>
          <InputMoney
            qtdValue={qtdValue}
            handleInputMoneyChange={handleInputMoneyChange}
            handleSubmit={handleSubmit}
            changeCrypto={true} />
          <div className={classes.bitcoinRealTime}>
            {/* Applying mask to show bitcoins and Britas */}
            <h3>Valor em Bitcoin {ConvertCryptoStringToCoin(cryptoMirror.bitcoin.toString())}</h3>
            <h3>Valor em Brita {ConvertCryptoStringToCoin(cryptoMirror.brita.toString())}</h3>
          </div>
        </section>
        <section>
          <DialogCheckout openDialogInformation={openDialogInformation} setOpenDialogInformation={setOpenDialogInformation} />
        </section>
      </section>
    </Paper>
  )
}

export default ChangeCryptoCard
