import { GetStorage } from '../../data/protocols/cache/get-storage.interface'

export class LocalStorageGetAdapter implements GetStorage {
  get (username: string): any {
    return localStorage.getItem(username)
  }
}
