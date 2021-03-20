import { GetStorage } from '../../../data/protocols/cache/get-storage.interface'
import { LocalStorageGetAdapter } from '../../../infra/local-storage-get-adapter/local-storage-get-adapter'

export const makeLocalStorageGetAdapter = (): GetStorage => {
  return new LocalStorageGetAdapter()
}
