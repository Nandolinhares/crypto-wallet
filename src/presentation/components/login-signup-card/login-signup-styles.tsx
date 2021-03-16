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
  cryptos: {
    display: 'flex',
    justifyContent: 'space-evenly',
    marginTop: 48
  }
})
