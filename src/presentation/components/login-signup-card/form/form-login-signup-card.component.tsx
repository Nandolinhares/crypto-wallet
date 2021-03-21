import React, { useState, useEffect } from 'react'
// RRD
import { Link, useHistory } from 'react-router-dom'
// MUI
import { Button } from '@material-ui/core'
import { useStyles, CssTextField } from './form-login-signup-styles'

// Errors
import { InputErrorType } from '../../../../domain/errors/input-errors/input-error-type'
import { VerifyLoginSignup } from './verify-login-signup'

type Props = {
  value: string
}

const FormSignupCard: React.FC<Props> = ({ value }: Props) => {
  const classes = useStyles()
  const history = useHistory()
  // States
  const [username, setUsername] = useState<string>('')
  const [errorState, setErrorState] = useState<InputErrorType>({
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
      // Verify if is Login or signup and make
      VerifyLoginSignup({ value, username, setErrorState, history })
    }
  }
  return (
    <form data-testid="form" onSubmit={handleSubmit} noValidate autoComplete="off">
      <CssTextField
        className={classes.username}
        label="Usuário"
        placeholder={value === 'login' ? 'Digite o seu usuário' : 'Cadastre o seu usuário'}
        variant="outlined"
        id="custom-css-outlined-input"
        onChange={handleChange}
        value={username || ''}
        error={errorState.error}
        helperText={errorState.error ? errorState.helperText : ''}
        inputProps={{ 'data-testid': `${value}-input`, title: errorState.error ? errorState.helperText : `${value}-input` }}
      />
      <div className={classes.divButtons}>
        <Button
          variant="outlined"
          className={classes.buttonVoltar}
          component={Link}
          to="/">
            PÁGINA PRINCIPAL
        </Button>
        <Button type="submit" id="button-login-signup" data-testid="login-signup-button" variant="contained" className={classes.buttonSubmit}>{value === 'login' ? 'ENTRAR' : 'CADASTRAR'}</Button>
      </div>
    </form>
  )
}

export default FormSignupCard
