import { GetStorage } from '../../data/protocols/cache/get-storage.interface'

export class LocalStorageGetAdapter implements GetStorage {
  get (username: string): any {
    // Parsin storage string to an object
    return JSON.parse(localStorage.getItem(username))
  }
}
