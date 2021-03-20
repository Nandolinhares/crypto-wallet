import { CheckoutModel } from '../../../domain/models/checkout-model/checkout-model.type'
import { CheckoutInterface, CheckoutParams } from '../../../domain/usecases/checkout/checkout.interface'

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

export class PrepareCheckoutSpy implements CheckoutInterface {
  finish (params: CheckoutParams): CheckoutModel {
    if (parseFloat(params.user.money) > 0 && parseFloat(params.qtdValue) > 0) {
      return {
        error: false,
        message: 'Ok'
      }
      // switch (true) {
      //   // Caso seja compra, passa o operador de subtração do dinheiro
      //   case (params.stateSelected === 0):
      //     this.checkoutInformation = CalculateCheckout(params, '-')
      //     return this.checkoutInformation
      //   // Caso seja venda, passao o operador de adição do dinheiro
      //   case (params.stateSelected === 1):
      //     this.checkoutInformation = CalculateCheckout(params, '+')
      //     return this.checkoutInformation
      // }
    } else {
      return {
        error: true,
        message: 'Você não pode inserir valores negativos'
      }
    }
  }
}
