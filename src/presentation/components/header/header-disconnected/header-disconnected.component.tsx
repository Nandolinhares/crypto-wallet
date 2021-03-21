import React from 'react'
// RRD
import { Link } from 'react-router-dom'
// MUI
import Button from '@material-ui/core/Button'

const HeaderDisconnected: React.FC = () => {
  return (
    <>
      <li>
        <Link to="/login">
          <Button variant="contained" className="buttonLogin">
            ENTRAR
          </Button>
        </Link>
      </li>
      <li>
        <Link to="/signup">
          <Button variant="outlined" className="buttonCadastrar" data-testid="signup-header">
            CADASTRAR
          </Button>
        </Link>
      </li>
    </>
  )
}

export default HeaderDisconnected
