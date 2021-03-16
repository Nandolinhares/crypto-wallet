import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Container } from '@material-ui/core'
// Components
import { Login, Signup } from './pages'
import { Header } from './components'

type Props = {
  makeApp: React.FC
}

const Router: React.FC<Props> = ({ makeApp }: Props) => {
  return (
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
  )
}

export default Router
