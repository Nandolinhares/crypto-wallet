import React, { useState, useEffect } from 'react'
// MUI
import { Paper } from '@material-ui/core'
// Styles
import { useStyles } from './login-signup-styles'
// Components
import CryptoCard from '../crypto-card/crypto-card'
// Adapter
import { makeCreateAccount } from '../../../main/factories/usecases/create-account-factory'
import FormSignupCard from './form-signup-card.component'

type Props = {
  value: string
}

const LoginSignupCard: React.FC<Props> = ({ value }: Props) => {
  const classes = useStyles()
  // States
  const [username, setUsername] = useState('')
  const [errorState, setErrorState] = useState({
    error: false,
    helperText: ''
  })

  // Clean input erros when username changes
  useEffect(() => {
    setErrorState({
      error: false,
      helperText: ''
    })
  }, [username])

  // Controlled input
  const handleChange = (event: React.ChangeEvent<HTMLInputElement> & React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>): void => {
    setUsername(event.target.value)
  }

  // When submits
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    // If field is empty, show errors else save username in localstorage with makeCreateAccount
    if (username.trim() === '') {
      setErrorState({
        error: true,
        helperText: 'O campo não pode estar em branco'
      })
    } else {
      if (localStorage.getItem(username) === null) {
        makeCreateAccount().create(username)
      } else {
        setErrorState({
          error: true,
          helperText: 'O usuário já existe'
        })
      }
    }
  }

  return (
    <>
      <Paper elevation={3} className={classes.paper}>
        <h2>{value === 'login' ? 'Bem Vindo de volta' : 'Cadastre-se'}</h2>
        {/* Form cadastrar / login */}
        <FormSignupCard
          handleChange={handleChange}
          errorState={errorState}
          handleSubmit={handleSubmit}
          username={username}
          value={value} />
      </Paper>
      <section className={classes.cryptos}>
        <CryptoCard value="Bitcoin" />
        <CryptoCard value="Brita" />
      </section>
    </>
  )
}

export default LoginSignupCard
