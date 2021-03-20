import { PrepareCheckout } from '@/data/usecases/prepare-checkout/prepare-checkout'
import { CheckoutInterface } from '../../../../domain/usecases/checkout/checkout.interface'

export const makePrepareCheckout = (): CheckoutInterface => new PrepareCheckout()
