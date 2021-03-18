import React from 'react'
// MUI
import { useStyles } from './profile-styles'
import { Grid } from '@material-ui/core'
// Redux
import { useSelector } from 'react-redux'
import { WalletCard } from '../../components'

const Profile: React.FC = () => {
  const classes = useStyles()
  // Global States
  const { user } = useSelector(state => state.user)
  return (
    <>
      <h2>DASHBOARD</h2>
      <Grid container spacing={2}>
        <Grid item md={9} className={classes.dashboard}>
          <WalletCard type="money" value={user.money} />
          <WalletCard type="bitcoin" value={user.bitcoins} />
          <WalletCard type="brita" value={user.britas} />
        </Grid>
        <Grid item md={3}>
          <h2>Perfil do usuário</h2>
        </Grid>
        {/* <Grid item md={6} className={classes.cryptosCards}>
          <div className={classes.bitcoinDiv}>
            <CryptoCard value="Bitcoin" />
          </div>
          <div>
            <CryptoCard value="Brita" />
          </div>
        </Grid> */}
      </Grid>
    </>
  )
}

export default Profile
