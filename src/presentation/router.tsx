import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Container } from '@material-ui/core'
import { Header } from './components'

type Props = {
  makeApp: React.FC
}

const Router: React.FC<Props> = ({ makeApp }: Props) => {
  return (
    <Container maxWidth="lg">
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={makeApp} />
        </Switch>
      </BrowserRouter>
    </Container>
  )
}

export default Router
