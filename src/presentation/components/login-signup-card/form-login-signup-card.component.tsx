import React, { useState, useEffect } from 'react'
// RRD
import { Link } from 'react-router-dom'
// MUI
import { TextField, Button, withStyles } from '@material-ui/core'
import { useStyles } from './form-signup-styles'
// Adapter
import { makeCreateAccountFactory } from '../../../main/factories/usecases/create-account-factory'
// Errors
import { InputErrorType } from '../../../domain/errors/input-errors/input-error-type'
import { makeLoginFactory } from '@/main/factories/usecases/make-login-factory'

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'green'
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'green'
    },
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: 'green'
      }
    }
  }
})(TextField)

type Props = {
  value: string
}

const FormSignupCard: React.FC<Props> = ({ value }: Props) => {
  const classes = useStyles()
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
      // If signup and username doesnt exists in localStorage
      if (value === 'signup' && localStorage.getItem(username) === null) {
        makeCreateAccountFactory().create(username)
        // If login and username exists in localStorage
      } else if (value === 'login' && localStorage.getItem(username) !== null) {
        makeLoginFactory().login(username)
        // If user doesnt exists in localStorage
      } else {
        setErrorState({
          error: true,
          helperText: 'O usuário já existe'
        })
      }
    }
  }
  return (
    <form onSubmit={handleSubmit} noValidate autoComplete="off">
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
      />
      <div className={classes.divButtons}>
        <Button variant="outlined" className={classes.buttonVoltar} component={Link} to="/">PÁGINA PRINCIPAL</Button>
        <Button type="submit" variant="contained" className={classes.buttonSubmit}>{value === 'login' ? 'ENTRAR' : 'CADASTRAR'}</Button>
      </div>
    </form>
  )
}

export default FormSignupCard