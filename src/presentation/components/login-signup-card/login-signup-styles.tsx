import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles({
  paper: {
    padding: 28,
    maxWidth: 800,
    margin: '28px auto',

    '& h2': {
      color: 'green',
      textTransform: 'uppercase',
      textAlign: 'center'
    }
  },
  // Username input
  username: {
    maxWidth: '100%',
    width: '100%'
  },
  divButtons: {
    display: 'flex',
    justifyContent: 'space-evenly',
    marginTop: 28
  },
  // Button voltar
  buttonVoltar: {
    color: 'green'
  },
  // Button submit
  buttonSubmit: {
    background: 'green',
    color: '#fff',
    padding: '8px 28px',

    '&:hover': {
      backgroundColor: '#2fbd12'
    }
  }
})
