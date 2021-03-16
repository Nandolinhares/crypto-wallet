import { SetStorage } from '../../protocols/cache/set-storage.interface'
import { CreateAccountInterface } from '../../../domain/usecases/create-account/create-account.interface'

export class CreateAccount implements CreateAccountInterface {
  constructor (
    private readonly setStorage: SetStorage
  ) {}

  create (username: string): void {
    this.setStorage.set(username, JSON.stringify(
      {
        username,
        money: '100000'
      }
    ))
  }
}
