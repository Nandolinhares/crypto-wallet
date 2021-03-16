import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const DisconnectedRoute: React.FC<any> = ({ component: Component, authed, ...rest }: any) => {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Redirect to={{ pathname: '/profile', state: { from: props.location } } } />
        : <Component {...props} />}
    />
  )
}

export default DisconnectedRoute
