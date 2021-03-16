import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles({
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
