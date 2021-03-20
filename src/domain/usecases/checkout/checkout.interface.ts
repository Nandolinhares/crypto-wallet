import { AccountModel } from '../../models/account-model/account-model.type'
import { CheckoutModel } from '../../models/checkout-model/checkout-model.type'

export type CheckoutParams = {
  cryptoName: string
  cryptoPrice: string
  qtdValue: string
  user: AccountModel
  stateSelected: number
}

export interface CheckoutInterface {
  finish: (params: CheckoutParams) => CheckoutModel
}
