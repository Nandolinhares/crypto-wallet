import React from 'react'
// MUI
import { Paper } from '@material-ui/core'
// Styles
import { useStyles } from './login-signup-styles'
// Components
import CryptoCard from '../crypto-card/crypto-card'
import FormLoginSignupCard from './form-login-signup-card.component'

type Props = {
  value: string
}

const LoginSignupCard: React.FC<Props> = ({ value }: Props) => {
  const classes = useStyles()
  return (
    <>
      <Paper elevation={3} className={classes.paper}>
        <h2>{value === 'login' ? 'Bem Vindo de volta' : 'Cadastre-se'}</h2>
        {/* Form cadastrar / login */}
        <FormLoginSignupCard value={value} />
      </Paper>
      <section className={classes.cryptos}>
        <CryptoCard value="Bitcoin" />
        <CryptoCard value="Brita" />
      </section>
    </>
  )
}

export default LoginSignupCard
