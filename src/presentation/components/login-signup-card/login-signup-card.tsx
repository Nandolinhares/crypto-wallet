import React from 'react'
// RRD
import { Link } from 'react-router-dom'
// MUI
import { Paper, TextField, Button } from '@material-ui/core'
// Styles
import { useStyles } from './login-signup-styles'

type Props = {
  value: string
}

const LoginSignupCard: React.FC<Props> = ({ value }: Props) => {
  const classes = useStyles()
  return (
    <Paper elevation={3} className={classes.paper}>
      <h2>{value === 'login' ? 'Bem Vindo de volta' : 'Cadastre-se'}</h2>
      <form noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label="Usuario"
          variant="outlined"
          placeholder={value === 'login' ? 'Digite o seu usuário' : 'Cadastre o seu usuário'}
          className={classes.username} />
        <div className={classes.divButtons}>
          <Button variant="outlined" className={classes.buttonVoltar} component={Link} to="/">PÁGINA PRINCIPAL</Button>
          <Button type="submit" variant="contained" className={classes.buttonSubmit}>{value === 'login' ? 'ENTRAR' : 'CADASTRAR'}</Button>
        </div>
      </form>
    </Paper>
  )
}

export default LoginSignupCard
