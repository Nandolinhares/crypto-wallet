import React from 'react'
// Styles
import { useStyles } from './header-styles'
// Icons
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined'
import HeaderLogged from './header-logged/header-logged.component'
import HeaderDisconnected from './header-disconnected/header-disconnected.component'
// Redux
import { useSelector } from 'react-redux'

const Header: React.FC = () => {
  const classes = useStyles()
  // Global state
  const { user } = useSelector(state => state.user)

  return (
    <>
      <div className={classes.headerDiv}>
        <div className="logoDiv">
          <MonetizationOnOutlinedIcon className="moneyIcon" fontSize="large" />
          <a href="/"><h1 data-testid="h1">CRYPTO WALLET</h1></a>
        </div>
        <nav className="nav">
          <ul data-testid="ul">
            {user !== null
              ? <HeaderLogged />
              : <HeaderDisconnected />}
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Header
