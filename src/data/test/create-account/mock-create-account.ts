import { SetStorage } from '../../protocols/cache/set-storage.interface'

export class SetStorageMock implements SetStorage {
  public username: string

  set (username: string): void {
    this.username = username
  }
}
