import { AccountModel } from '../../../domain/models/account-model/account-model.type'
import { GET_USER_LOGGED } from '../types/user-types/login-types'

type UserState = {
  user: AccountModel
}

const initialState = {
  user: {
    username: '',
    money: '',
    bitcoins: '',
    britas: ''
  }
}

export default function (state: UserState = initialState, action: any): any {
  switch (action.type) {
    case GET_USER_LOGGED:
      return {
        ...state,
        user: action.payload
      }
    default:
      return state
  }
}
