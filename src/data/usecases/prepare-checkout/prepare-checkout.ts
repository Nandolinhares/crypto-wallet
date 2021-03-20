import { CheckoutModel } from '../../../domain/models/checkout-model/checkout-model.type'
import { CheckoutInterface, CheckoutParams } from '../../../domain/usecases/checkout/checkout.interface'
import { CalculateCheckout } from '../../../presentation/helpers/prepare-checkout/calculate-checkout'

export class PrepareCheckout implements CheckoutInterface {
  private checkoutInformation: CheckoutModel

  finish (params: CheckoutParams): CheckoutModel {
  // Se o usuário tiver mais de 0 reais
    if (parseFloat(params.user.money) > 0 && parseFloat(params.qtdValue) > 0) {
      switch (true) {
        // Caso seja compra, passa o operador de subtração do dinheiro
        case (params.stateSelected === 0):
          this.checkoutInformation = CalculateCheckout(params, '-')
          return this.checkoutInformation
        // Caso seja venda, passao o operador de adição do dinheiro
        case (params.stateSelected === 1):
          this.checkoutInformation = CalculateCheckout(params, '+')
          return this.checkoutInformation
      }
    } else {
      return {
        error: true,
        message: 'Você não pode inserir valores negativos'
      }
    }
  }
}
