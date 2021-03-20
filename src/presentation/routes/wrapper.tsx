import React from 'react'
import { useDispatch } from 'react-redux'
// Actions
import { GetUserLogged } from '../redux/actions/user-actions'

const Wrapper: React.FC = ({ children }: any) => {
  const dispatch = useDispatch()

  dispatch(GetUserLogged())
  return (
    <>
      {children}
    </>
  )
}

export default Wrapper
