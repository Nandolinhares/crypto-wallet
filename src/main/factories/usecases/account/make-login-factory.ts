import { MakeLogin } from '../../../../data/usecases'
import { MakeLoginInterface } from '../../../../domain/usecases/make-login/make-login.interface'
import { makeLocalStorageGetAdapter } from '../../cache/local-storage-get-adapter'

export const makeLoginFactory = (): MakeLoginInterface => new MakeLogin(makeLocalStorageGetAdapter())
