import { makeStyles, TextField, withStyles } from '@material-ui/core'

export const useStyles = makeStyles({
  sectionInput: {
    marginTop: 28
  },
  inputMoney: {
    maxWidth: '100%',
    width: '100%',
    backgroundColor: '#272727'
  },
  buttonAction: {
    marginTop: 28,
    width: '100%'
  }
})

export const CssTextField = withStyles({
  root: {
    '& .MuiInputBase-input': {
      color: '#fff',
      '&:focus': {
        color: '#fff'
      }
    },
    '& label': {
      color: '#fff'
    },
    '& label.Mui-focused': {
      color: '#fff'
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'green',
      color: '#fff'
    },
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: 'green',
        color: '#fff'
      }
    }
  }
})(TextField)
