import { SetStorage } from '../../data/protocols/cache/set-storage.interface'

export class LocalStorageAdapter implements SetStorage {
  set (id: string, value: any): void {
    localStorage.setItem(id, value)
  }
}
