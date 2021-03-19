import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles({
  paper: {
    padding: 28,
    backgroundColor: '#373536',
    '& h2': {
      color: '#fff',
      textTransform: 'uppercase',
      textAlign: 'center'
    }
  },
  mainSection: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  bitcoinRealTime: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',

    '& h3': {
      color: '#fff',
      textTransform: 'uppercase'
    }
  }
})
