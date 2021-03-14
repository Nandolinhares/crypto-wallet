import React from 'react'
// MUI
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
// Icons
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined'

const useStyles = makeStyles({
  headerDiv: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& .logoDiv': {
      display: 'flex',
      alignItems: 'center'
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

const Header: React.FC = () => {
  const classes = useStyles()
  return (
    <>
      <div className={classes.headerDiv}>
        <div className="logoDiv">
          <MonetizationOnOutlinedIcon className="moneyIcon" fontSize="large" />
          <h1 data-testid="h1">CRYPTO WALLET</h1>
        </div>
        <nav className="nav">
          <ul data-testid="ul">
            <li>
              <Button variant="contained" className="buttonLogin">
                ENTRAR
              </Button>
            </li>
            <li>
              <Button variant="outlined" className="buttonCadastrar">
                CADASTRAR
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Header
