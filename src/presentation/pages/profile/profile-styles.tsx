import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles({
  cryptosCards: {
    display: 'flex',
    flexDirection: 'row',
    fontSize: 38,
    marginTop: '48px !important'
  },
  dashboard: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },
  hr: {
    marginTop: 28,
    color: '#d5d5d5'
  },
  sectionBuyOrSell: {
    marginTop: 28
  },
  bitcoinDiv: {
    marginRight: 28
  }
})
