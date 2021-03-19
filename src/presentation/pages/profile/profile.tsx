import React from 'react'
// MUI
import { useStyles } from './profile-styles'
import { Grid } from '@material-ui/core'
// Redux
import { useSelector } from 'react-redux'
import { WalletCard, CryptoCard, BuySellCryptoCard } from '../../components'

const Profile: React.FC = () => {
  const classes = useStyles()
  // Global States
  const { user } = useSelector(state => state.user)
  console.log(user)
  return (
    <>
      <h2>DASHBOARD</h2>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12}>
          {/* Dashboard */}
          <section className={classes.dashboard}>
            <WalletCard type="money" value={user.money} />
            <WalletCard type="bitcoin" value={user.bitcoins} />
            <WalletCard type="brita" value={user.britas} />
          </section>
          <hr className={classes.hr} />
          <h2>NEGOCIAÇÕES</h2>
          <section className={classes.sectionBuyOrSell}>
            {/* Card buy or sell crypto conins */}
            <BuySellCryptoCard />
          </section>
        </Grid>
        {/* <Grid item md={}>
          <h2>Perfil do usuário</h2>
        </Grid> */}
        <Grid item md={10} className={classes.cryptosCards}>
          <div className={classes.bitcoinDiv}>
            <CryptoCard value="Bitcoin" />
          </div>
          <div>
            <CryptoCard value="Brita" />
          </div>
        </Grid>
      </Grid>
    </>
  )
}

export default Profile
