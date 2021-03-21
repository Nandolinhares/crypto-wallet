import { CheckoutParams } from '../../../domain/usecases/checkout/checkout.interface'

export const mockCheckoutParams = (): CheckoutParams => {
  return {
    cryptoName: 'bitcoin',
    cryptoPrice: '326000',
    qtdValue: '200',
    stateSelected: 0,
    user: {
      bitcoins: '0',
      britas: '0',
      money: '1',
      statement: [],
      username: 'teste'
    }
  }
}
