import React, { useState, useEffect } from 'react'
// MUI
import Paper from '@material-ui/core/Paper'
import CircularProgressWithLabel from '../loading-with-counter/loading-with-counter'
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined'
// Styles
import { useStyles } from './crypto-card-styles'
import axios from 'axios'
// Redux
import { useSelector, useDispatch } from 'react-redux'
// Helpers
import { ConvertCryptoStringToCoin } from '../../helpers/crypto-helpers/convert-crypto-string-to-coin'
import { getCryptoHelper } from '../../helpers/crypto-helpers/get-crypto-helper'

type Props = {
  value: string
}

const CryptoCard: React.FC<Props> = ({ value }: Props) => {
  const classes = useStyles()
  // Local States
  const [counter, setCounter] = useState<number>(10)
  const [progress, setProgress] = useState<number>(100)
  // Redux
  const dispatch = useDispatch()
  // Global States
  const { bitcoin, brita } = useSelector(state => state.crypto)

  // Counter changes from 10 to 1. When its 0, so 10 is called again to call api.
  const changeCounter = (): void => {
    if (counter === 0) {
      return setCounter(10)
    } else {
      return setCounter(prev => prev - 1)
    }
  }

  const changeProgress = (): void => {
    if (counter === 0) {
      return setProgress(100)
    } else {
      return setProgress(prev => prev - 10)
    }
  }

  useEffect(() => {
    // instância do CancelToken
    const CancelToken = axios.CancelToken
    // instância do source, onde está contido o token de cancelamento
    const source = CancelToken.source()
    // Quando o contador chega a 10, chama a API de novo
    if (counter === 10) {
      // Helper to get crypto values
      getCryptoHelper(value, source.token, dispatch)
    }
    setTimeout(() => {
      changeCounter()
      changeProgress()
    }, 1000)

    return () => {
      source.cancel() // Clean subscription
    }
  }, [counter])

  return (
    <Paper elevation={3} className={classes.paper}>
      <section className="top">
        {/* Case Bitcoin show bitcoins image */}
        {value === 'Bitcoin'
          ? <img src="https://www.mercadobitcoin.com.br/resources/assets/v2/img/icons/assets/ico-btc-color.svg" alt="bitcoinLogo" />
          : <MonetizationOnOutlinedIcon className="moneyIcon" fontSize="large" />}
        <h2>{value}</h2>
        <CircularProgressWithLabel value={progress} counter={counter} />
      </section>
      {/* Show biutcoin or brita */}
      <h2>{value === 'Bitcoin' ? ConvertCryptoStringToCoin(bitcoin) : ConvertCryptoStringToCoin(brita)}</h2>
      <p>83,26 {value === 'Bitcoin' ? bitcoin : brita} negociados nas últimas 24hs teste</p>
    </Paper>
  )
}

export default CryptoCard
