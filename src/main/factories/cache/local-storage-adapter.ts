import { SetStorage } from '../../../data/protocols/cache/set-storage.interface'
import { LocalStorageAdapter } from '../../../infra/local-storage-adapter/local-storage-adapter'

export const makeLocalStorageAdapter = (): SetStorage => {
  return new LocalStorageAdapter()
}
