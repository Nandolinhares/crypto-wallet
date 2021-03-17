import React from 'react'
// MUI
import { useStyles } from './profile-styles'
import { Grid } from '@material-ui/core'
import CryptoCard from '../../components/crypto-card/crypto-card'
// Redux
import { useSelector } from 'react-redux'

const Profile: React.FC = () => {
  const classes = useStyles()
  // Global States
  const { bitcoin, brita } = useSelector(state => state.crypto)
  return (
    <Grid container spacing={2}>
      <Grid item md={6}>
        <h2>Hello World</h2>
        <p>{bitcoin}</p>
        <p>{brita}</p>
      </Grid>
      <Grid item md={6} className={classes.cryptosCards}>
        <div className={classes.bitcoinDiv}>
          <CryptoCard value="Bitcoin" />
        </div>
        <div>
          <CryptoCard value="Brita" />
        </div>
      </Grid>
    </Grid>
  )
}

export default Profile
