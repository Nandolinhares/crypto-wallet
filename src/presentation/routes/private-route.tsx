import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute: React.FC<any> = ({ component: Component, authed, ...rest }: any) => {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/login', state: { from: props.location } } } />}
    />
  )
}

export default PrivateRoute
