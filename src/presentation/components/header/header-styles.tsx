import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles({
  headerDiv: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& .logoDiv': {
      display: 'flex',
      alignItems: 'center'
    },
    '& .logoDiv a': {
      textDecoration: 'none',
      color: '#000'
    },
    // Title
    '& h1': {
      fontWeight: 'bold'
    },
    // Icon title
    '& .moneyIcon': {
      color: 'green'
    },
    // Menu
    '& nav': {
      '& ul': {
        display: 'flex'
      },
      '& li': {
        listStyle: 'none',
        marginRight: 28
      },
      // Login Button
      '& .buttonLogin': {
        backgroundColor: 'green',
        color: '#fff',
        padding: '8px 28px'
      },
      // Signup Button
      '& .buttonCadastrar': {
        color: 'green',
        padding: '8px 28px'
      }
    }
  }
})
