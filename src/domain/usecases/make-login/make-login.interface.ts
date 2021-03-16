import { AccountModel } from '../../models/account-model.type'

export interface MakeLoginInterface {
  login: (username: string) => AccountModel
}
