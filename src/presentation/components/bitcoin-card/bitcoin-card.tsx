import React, { useState, useEffect } from 'react'
// MUI
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
// Get Bitcoins
import { makeGetBitcoinValue } from '../../../main/factories/usecases/get-bitcoin-value-factory'
import { BitcoinResultInterface } from '../../../domain/models/bitcoin-result.interface'
import CircularProgressWithLabel from '../loading-with-counter/loading-with-counter'
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
    }
  }
})

const BitcoinCard: React.FC = () => {
  const classes = useStyles()
  // States
  const [bitcoinValue, setBitcoinValue] = useState<string>(null)
  const [counter, setCounter] = useState<number>(10)
  const [progress, setProgress] = useState<number>(100)

  // Functions calls makeGetBicoin, and then calls API using axios get
  const bitcoinsCallBack = async (cancelToken: any): Promise<BitcoinResultInterface> => {
    let httpResponse: any
    try {
      httpResponse = await makeGetBitcoinValue().show(cancelToken)
      setBitcoinValue(parseFloat(httpResponse.ticker.last).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }))
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
      bitcoinsCallBack(source.token)
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
        <img src="https://www.mercadobitcoin.com.br/resources/assets/v2/img/icons/assets/ico-btc-color.svg" alt="bitcoinLogo" />
        <h2>Bitcoin</h2>
        <CircularProgressWithLabel value={progress} counter={counter} />
      </section>
      <h2>{bitcoinValue}</h2>
      <p>83,26 bitcoins negociados nas últimas 24hs teste</p>
    </Paper>
  )
}

export default BitcoinCard
