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
              <Button variant="contained" className="buttonLogin" component={Link} to="/login">
                ENTRAR
              </Button>
            </li>
            <li>
              <Button variant="outlined" className="buttonCadastrar" component={Link} to="/signup">
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
