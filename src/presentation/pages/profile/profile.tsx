import React from 'react'
// RRD
import { Link } from 'react-router-dom'
// MUI
import { useStyles } from './profile-styles'
import { Grid, Button } from '@material-ui/core'
// Redux
import { useSelector } from 'react-redux'
import { WalletCard, CryptoCard, BuySellCryptoCard, ChangeCryptocard } from '../../components'

const Profile: React.FC = () => {
  const classes = useStyles()
  // Global States
  const { user } = useSelector(state => state.user)
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
          <div className={classes.statementDiv}>
            <h2>NEGOCIAÇÕES</h2>
            <Button variant="outlined" component={Link} to="/statement" className={classes.buttonStatement}>MEUS EXTRATOS</Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <section className={classes.sectionBuyOrSell}>
            {/* Card buy or sell crypto conins */}
            <BuySellCryptoCard />
          </section>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <section className={classes.sectionBuyOrSell}>
            {/* Card buy or sell crypto conins */}
            <ChangeCryptocard />
          </section>
        </Grid>
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
