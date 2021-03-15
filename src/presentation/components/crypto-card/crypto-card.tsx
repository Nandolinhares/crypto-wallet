import React, { useState, useEffect } from 'react'
// MUI
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
// Get Bitcoins
import { makeGetBitcoinValue, makeGetBritaValue } from '../../../main/factories/usecases'
import CircularProgressWithLabel from '../loading-with-counter/loading-with-counter'
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined'
import axios from 'axios'

const useStyles = makeStyles({
  paper: {
    borderRadius: 8,
    padding: 28,
    '& .top': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    // Title
    '& .top h2': {
      fontSize: 28
    },
    // Bitcoin Value
    '& h2': {
      textAlign: 'center',
      borderBottom: '1px solid #e4e4e4'
    },

    '& p': {
      fontSize: '18px !important'
    },
    '& .moneyIcon': {
      color: 'green'
    }
  }
})

type Props = {
  value: string
}

const CryptoCard: React.FC<Props> = ({ value }: Props) => {
  const classes = useStyles()
  // States
  const [cryptoValue, setBitcoinValue] = useState<string>(null)
  const [counter, setCounter] = useState<number>(10)
  const [progress, setProgress] = useState<number>(100)

  // Functions calls makeGetBicoin, and then calls API using axios get
  const cryptoCallBack = async (cancelToken: any): Promise<any> => {
    let httpResponse: any
    try {
      switch (value) {
        case 'Bitcoin':
          httpResponse = await makeGetBitcoinValue().show(cancelToken)
          setBitcoinValue(parseFloat(httpResponse.ticker.last).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }))
          break
        case 'Brita':
          httpResponse = await makeGetBritaValue().show(cancelToken)
          setBitcoinValue(parseFloat(httpResponse.USD.bid).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }))
          break
        default:
          httpResponse = await makeGetBitcoinValue().show(cancelToken)
          break
      }
    } catch (error) {
      httpResponse = error.response
    }
    return httpResponse
  }

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
      cryptoCallBack(source.token)
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
        {value === 'Bitcoin'
          ? <img src="https://www.mercadobitcoin.com.br/resources/assets/v2/img/icons/assets/ico-btc-color.svg" alt="bitcoinLogo" />
          : <MonetizationOnOutlinedIcon className="moneyIcon" fontSize="large" />}
        <h2>{value}</h2>
        <CircularProgressWithLabel value={progress} counter={counter} />
      </section>
      <h2>{cryptoValue}</h2>
      <p>83,26 {cryptoValue} negociados nas últimas 24hs teste</p>
    </Paper>
  )
}

export default CryptoCard
