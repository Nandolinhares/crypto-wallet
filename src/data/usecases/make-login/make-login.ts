import { GetStorage } from '../../protocols/cache/get-storage.interface'
import { MakeLoginInterface } from '../../../domain/usecases/make-login/make-login.interface'
import { AccountModel } from '../../../domain/models/account-model.type'

export class MakeLogin implements MakeLoginInterface {
  public user: AccountModel
  constructor (
    private readonly getStorage: GetStorage
  ) {}

  login (username: string): void {
    this.user = JSON.parse(this.getStorage.get(username))
    this.user.isLogged = true
    localStorage.setItem('userActive', JSON.stringify(this.user))
  }
}
