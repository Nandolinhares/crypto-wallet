import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Container } from '@material-ui/core'
// Components
import { Login, Signup } from './pages'
import { Header } from './components'
import { AccountModel } from '../domain/models/account-model.type'
// Contexts
import UserContext from './contexts/user-context'

type Props = {
  makeApp: React.FC
}

const Router: React.FC<Props> = ({ makeApp }: Props) => {
  const [user, setUser] = useState<AccountModel>({
    username: '',
    money: '',
    isLogged: false
  })

  useEffect(() => {
    console.log(JSON.parse(localStorage.getItem('userActive')))
  }, [user])

  return (
    <UserContext.Provider value={ { user, setUser } }>
      <Container maxWidth="lg">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={makeApp} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
          </Switch>
        </BrowserRouter>
      </Container>
    </UserContext.Provider>
  )
}

export default Router
