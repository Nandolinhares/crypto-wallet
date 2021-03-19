import { takeLatest, put } from 'redux-saga/effects'
import { makeLocalStorageSetAdapter } from '../../../main/factories/cache/local-storage-set-adapter'
import { makeLocalStorageGetAdapter } from '../../../main/factories/cache/local-storage-get-adapter'

// Worker cHECKOUT uSER
function * getUserLogged (action: any): any {
  try {
    const userLogged = JSON.parse(makeLocalStorageGetAdapter().get('userActive'))
    yield put({ type: 'GET_USER_LOGGED', payload: userLogged })
  } catch (err) {
    console.error(err)
  }
}

// Watcher Get User Logged
export function * watchGetUserLogged (): any {
  yield takeLatest('GET_USER_LOGGED_SAGA', getUserLogged)
}

// Worker Checkout User
function * checkoutUser (action: any): any {
  try {
    makeLocalStorageSetAdapter().set(action.payload.username, JSON.stringify(action.payload))
    yield put({ type: 'CHECKOUT_USER', payload: action.payload })
  } catch (err) {
    console.error(err)
  }
}

// Watcher Get User Logged
export function * watchCheckoutUser (): any {
  yield takeLatest('CHECKOUT_USER_SAGA', checkoutUser)
}
