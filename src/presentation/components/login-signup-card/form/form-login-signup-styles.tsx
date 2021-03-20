import { makeStyles, withStyles, TextField } from '@material-ui/core'

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
export const CssTextField = withStyles({
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
