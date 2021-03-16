import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles({
  paper: {
    borderRadius: 8,
    padding: 28,
    '& .top': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    // Title
    '& .top h2': {
      fontSize: 28
    },
    // Bitcoin Value
    '& h2': {
      textAlign: 'center',
      borderBottom: '1px solid #e4e4e4'
    },

    '& p': {
      fontSize: '18px !important'
    },
    '& .moneyIcon': {
      color: 'green'
    }
  }
})
