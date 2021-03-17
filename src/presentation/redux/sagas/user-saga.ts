import { takeLatest, put } from 'redux-saga/effects'
import { makeLocalStorageGetAdapter } from '../../../main/factories/cache/local-storage-get-adapter'

// Worker Get User Logged
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
