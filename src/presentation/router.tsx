import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

type Props = {
  makeApp: React.FC
}

const Router: React.FC<Props> = ({ makeApp }: Props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={makeApp} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
