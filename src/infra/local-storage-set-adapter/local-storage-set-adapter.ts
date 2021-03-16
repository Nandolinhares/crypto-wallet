import { SetStorage } from '../../data/protocols/cache/set-storage.interface'

export class LocalStorageSetAdapter implements SetStorage {
  set (id: string, value: any): void {
    localStorage.setItem(id, value)
    localStorage.setItem('userActive', value)
  }
}
