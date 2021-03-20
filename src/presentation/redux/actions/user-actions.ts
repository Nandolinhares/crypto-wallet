import { AccountModel } from '../../../domain/models/account-model/account-model.type'
import { ReduxTypeReturn } from '../models/redux-type-return'

// Get user logged
export const GetUserLogged = (): ReduxTypeReturn => {
  return { type: 'GET_USER_LOGGED_SAGA' }
}

// CheckoutUser
export const CheckoutUser = (checkoutInformation: AccountModel): ReduxTypeReturn => {
  return { type: 'CHECKOUT_USER_SAGA', payload: checkoutInformation }
}
