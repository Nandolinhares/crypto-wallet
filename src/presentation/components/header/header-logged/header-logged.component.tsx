import React from 'react'
// RRD
import { Link } from 'react-router-dom'
// MUI
import Button from '@material-ui/core/Button'

const HeaderLogged: React.FC = () => {
  const handleLogout = (): void => {
    localStorage.removeItem('userActive')
    location.href = '/'
  }

  return (
    <>
      <li>
        <Link to="/profile">
          <Button variant="contained" className="buttonLogin">
            PROFILE
          </Button>
        </Link>
      </li>
      <li>
        <Button variant="outlined" className="buttonCadastrar" onClick={handleLogout}>
          SAIR
        </Button>
      </li>
    </>
  )
}

export default HeaderLogged
