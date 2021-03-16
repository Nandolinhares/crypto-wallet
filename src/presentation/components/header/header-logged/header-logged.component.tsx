import React from 'react'
// RRD
import { Link } from 'react-router-dom'
// MUI
import Button from '@material-ui/core/Button'

const HeaderLogged: React.FC = () => {
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
        <Button variant="outlined" className="buttonCadastrar">
          SAIR
        </Button>
      </li>
    </>
  )
}

export default HeaderLogged
