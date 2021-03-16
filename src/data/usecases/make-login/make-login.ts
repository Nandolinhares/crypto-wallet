import { GetStorage } from '../../protocols/cache/get-storage.interface'
import { AccountModel } from '../../../domain/models/account-model.type'
import { MakeLoginInterface } from '../../../domain/usecases/make-login/make-login.interface'

export class MakeLogin implements MakeLoginInterface {
  constructor (
    private readonly getStorage: GetStorage
  ) {}

  login (username: string): AccountModel {
    return this.getStorage.get(username)
  }
}
