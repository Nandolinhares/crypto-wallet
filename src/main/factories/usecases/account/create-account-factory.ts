import { CreateAccount } from '../../../../data/usecases/create-account/create-account'
import { CreateAccountInterface } from '../../../../domain/usecases/create-account/create-account.interface'
import { makeLocalStorageSetAdapter } from '../../cache/local-storage-set-adapter'

export const makeCreateAccountFactory = (): CreateAccountInterface => {
  return new CreateAccount(makeLocalStorageSetAdapter())
}
