import React from 'react'
// RRD
import { Link } from 'react-router-dom'
// MUI
import Button from '@material-ui/core/Button'
// Styles
import { useStyles } from './header-styles'
// Icons
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined'

const Header: React.FC = () => {
  const classes = useStyles()
  return (
    <>
      <div className={classes.headerDiv}>
        <div className="logoDiv">
          <MonetizationOnOutlinedIcon className="moneyIcon" fontSize="large" />
          <a href="/"><h1 data-testid="h1">CRYPTO WALLET</h1></a>
        </div>
        <nav className="nav">
          <ul data-testid="ul">
            <li>
              <Link to="/login">
                <Button variant="contained" className="buttonLogin">
                  ENTRAR
                </Button>
              </Link>
            </li>
            <li>
              <Link to="/signup">
                <Button variant="outlined" className="buttonCadastrar">
                  CADASTRAR
                </Button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Header
