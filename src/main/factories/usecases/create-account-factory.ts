import { CreateAccount } from '../../../data/usecases/outro/create-account'
import { CreateAccountInterface } from '../../../domain/usecases/create-account/create-account.interface'
import { makeLocalStorageAdapter } from '../cache/local-storage-adapter'

export const makeCreateAccount = (): CreateAccountInterface => {
  return new CreateAccount(makeLocalStorageAdapter())
}
