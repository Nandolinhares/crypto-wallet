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
  statementDiv: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  buttonStatement: {
    color: 'green',
    padding: '8px 18px',
    margin: '0px 28px'
  },
  sectionBuyOrSell: {
    marginTop: 28
  },
  bitcoinDiv: {
    marginRight: 28
  }
})
