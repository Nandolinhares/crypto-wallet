import React, { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Container } from '@material-ui/core'
// Components
import { Login, Signup, Profile, StatementPage } from './pages'
import { Header } from './components'
import PrivateRoute from './routes/private-route'
import DisconnectedRoute from './routes/disconnected-route'
// Redux
import { Provider } from 'react-redux'
import store from './redux/store'
import Wrapper from './routes/wrapper'

type Props = {
  makeApp: React.FC
}

const Router: React.FC<Props> = ({ makeApp }: Props) => {
  const [user] = useState(JSON.parse(localStorage.getItem('userActive')))

  return (
    <Provider store={store}>
      <Wrapper>
        <Container maxWidth="lg">
          <BrowserRouter>
            <Header />
            <Switch>
              <Route exact path="/" component={makeApp} />
              <DisconnectedRoute exact authed={user !== null} path="/login" component={Login} />
              <DisconnectedRoute exact authed={user !== null} path="/signup" component={Signup} />
              <PrivateRoute authed={user !== null} path='/profile' component={Profile} />
              <PrivateRoute authed={user !== null} path='/statement' component={StatementPage} />
            </Switch>
          </BrowserRouter>
        </Container>
      </Wrapper>
    </Provider>
  )
}

export default Router
