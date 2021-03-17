import { ReduxTypeReturn } from '../models/redux-type-return'

// Get user logged
export const GetUserLogged = (): ReduxTypeReturn => {
  return { type: 'GET_USER_LOGGED_SAGA' }
}
