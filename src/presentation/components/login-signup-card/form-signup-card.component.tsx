import React from 'react'
// RRD
import { Link } from 'react-router-dom'
// MUI
import { TextField, Button, withStyles } from '@material-ui/core'
import { useStyles } from './form-signup-styles'
// Errors
import { InputErrorType } from '../../../domain/errors/input-errors/input-error-type'

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
  handleSubmit: React.FormEventHandler<HTMLFormElement>
  handleChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
  errorState: InputErrorType
  value: string
  username: string
}

const FormSignupCard: React.FC<Props> = ({ ...props }: Props) => {
  const classes = useStyles()
  return (
    <form onSubmit={props.handleSubmit} noValidate autoComplete="off">
      <CssTextField
        className={classes.username}
        label="Usuário"
        placeholder={props.value === 'login' ? 'Digite o seu usuário' : 'Cadastre o seu usuário'}
        variant="outlined"
        id="custom-css-outlined-input"
        onChange={props.handleChange}
        value={props.username || ''}
        error={props.errorState.error}
        helperText={props.errorState.error ? props.errorState.helperText : ''}
      />
      <div className={classes.divButtons}>
        <Button variant="outlined" className={classes.buttonVoltar} component={Link} to="/">PÁGINA PRINCIPAL</Button>
        <Button type="submit" variant="contained" className={classes.buttonSubmit}>{props.value === 'login' ? 'ENTRAR' : 'CADASTRAR'}</Button>
      </div>
    </form>
  )
}

export default FormSignupCard
