import { CheckoutModel } from '../../../domain/models/checkout-model/checkout-model.type'
import { CheckoutParams } from '../../../domain/usecases/checkout/checkout.interface'
import { CalculateResult } from './calculate-checkout'

export const PrepareCheckout = (params: CheckoutParams): CheckoutModel => {
  let checkoutInformation: CheckoutModel
  // Se o usuário tiver mais de 0 reais
  if (parseFloat(params.user.money) > 0 && parseFloat(params.qtdValue) > 0) {
    switch (true) {
      case (params.stateSelected === 0):
        checkoutInformation = CalculateResult(params, '-')
        return checkoutInformation
      case (params.stateSelected === 1):
        checkoutInformation = CalculateResult(params, '+')
        return checkoutInformation
    }
  } else {
    return {
      error: true,
      message: 'Você não pode inserir valores negativos'
    }
  }
}
