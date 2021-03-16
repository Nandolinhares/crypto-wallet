import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles({
  gridContainer: {
    '& h2': {
      fontSize: 58,
      '& strong': {
        color: 'green'
      }
    },
    '& p': {
      fontSize: 28
    }
  }
})
