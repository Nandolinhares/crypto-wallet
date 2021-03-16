import React, { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Container } from '@material-ui/core'
// Components
import { Login, Signup, Profile } from './pages'
import { Header } from './components'
import { AccountModel } from '../domain/models/account-model/account-model.type'
import PrivateRoute from './private-route'
import DisconnectedRoute from './disconnected-route'
// Contexts
import UserContext from './contexts/user-context'

type Props = {
  makeApp: React.FC
}

const Router: React.FC<Props> = ({ makeApp }: Props) => {
  const [user] = useState<AccountModel>(JSON.parse(localStorage.getItem('userActive')))

  return (
    <UserContext.Provider value={ { user } }>
      <Container maxWidth="lg">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={makeApp} />
            <DisconnectedRoute exact authed={user !== null} path="/login" component={Login} />
            <DisconnectedRoute exact authed={user !== null} path="/signup" component={Signup} />
            <PrivateRoute authed={user !== null} path='/profile' component={Profile} />
          </Switch>
        </BrowserRouter>
      </Container>
    </UserContext.Provider>
  )
}

export default Router
