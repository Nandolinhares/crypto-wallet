import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles({
  h1: {
    fontWeight: 'bold'
  }
})

const Login: React.FC = () => {
  const classes = useStyles()
  return (
    <div>
      <h1 data-testid="h1" className={classes.h1}>CRYPTO WALLET</h1>
      <form noValidate autoComplete="off">
        <TextField id="outlined-basic" label="Nome" variant="outlined" />
      </form>
    </div>
  )
}

export default Login
