import { SetStorage } from '../../../data/protocols/cache/set-storage.interface'
import { LocalStorageSetAdapter } from '../../../infra/local-storage-set-adapter/local-storage-set-adapter'

export const makeLocalStorageSetAdapter = (): SetStorage => {
  return new LocalStorageSetAdapter()
}
