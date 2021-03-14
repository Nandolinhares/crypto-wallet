import React from 'react'
// MUI
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
// Components
import BitcoinCard from '../bitcoin-card/bitcoin-card'

const useStyles = makeStyles({
  gridContainer: {
    '& h2': {
      fontSize: 58,
      '& strong': {
        color: 'green'
      }
    },
    '& p': {
      fontSize: 28
    }
  }
})

const StarterContent: React.FC = () => {
  const classes = useStyles()
  return (
      <Grid container spacing={2} className={classes.gridContainer}>
        <Grid item md={6}>
          <h2>A maior plataforma de <strong className="strong">criptomoedas</strong> da América Latina</h2>
          <p>Acesso, segurança e diversificação para você e mais de 2 milhões de clientes.</p>
        </Grid>
        <Grid item md={6}>
         <BitcoinCard />
        </Grid>
      </Grid>
  )
}

export default StarterContent
