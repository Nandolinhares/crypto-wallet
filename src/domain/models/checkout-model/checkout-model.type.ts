import { AccountModel } from '../account-model/account-model.type'

export type CheckoutModel = {
  message: string
  error: boolean
  data: AccountModel
}
