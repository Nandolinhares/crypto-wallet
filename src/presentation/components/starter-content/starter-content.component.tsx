import React from 'react'
// MUI
import Grid from '@material-ui/core/Grid'
// Styles
import { useStyles } from './starter-content-styles'
// Components
import CryptoCard from '../crypto-card/crypto-card'

const StarterContent: React.FC = () => {
  const classes = useStyles()
  return (
      <Grid container spacing={2} className={classes.gridContainer}>
        <Grid item md={6}>
          <h2>A maior plataforma de <strong className="strong">criptomoedas</strong> da América Latina</h2>
          <p>Acesso, segurança e diversificação para você e mais de 2 milhões de clientes.</p>
        </Grid>
        <Grid item md={6}>
         <CryptoCard value="Bitcoin" />
        </Grid>
        <Grid item md={6}>
         <CryptoCard value="Brita" />
        </Grid>
      </Grid>
  )
}

export default StarterContent
