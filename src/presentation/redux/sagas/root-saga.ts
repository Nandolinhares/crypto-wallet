import { all } from 'redux-saga/effects'

// Sagas
import { watchUpdateBitcoinValue, watchUpdateBritaValue } from './crypto-saga'
import { watchGetUserLogged, watchCheckoutUser } from './user-saga'

export default function * rootSaga (): any {
  yield all([
    watchGetUserLogged(),
    watchUpdateBitcoinValue(),
    watchUpdateBritaValue(),
    watchCheckoutUser()
  ])
}
