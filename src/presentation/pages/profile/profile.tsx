import React from 'react'
// MUI
import { useStyles } from './profile-styles'
import { Grid } from '@material-ui/core'
import CryptoCard from '../../components/crypto-card/crypto-card'

const Profile: React.FC = () => {
  const classes = useStyles()
  return (
    <Grid container spacing={2}>
      <Grid item md={6}>
        <h2>Hello World</h2>
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
