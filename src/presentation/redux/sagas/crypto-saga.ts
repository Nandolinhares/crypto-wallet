import { takeLatest, put } from 'redux-saga/effects'

// Worker Update Bitcoin Value
function * updateBitcoinValue (action: any): any {
  try {
    yield put({ type: 'UPDATE_BITCOIN_VALUE', payload: action.payload })
  } catch (err) {
    console.error(err)
  }
}

// Watcher Update Brita Value
export function * watchUpdateBitcoinValue (): any {
  yield takeLatest('UPDATE_BITCOIN_VALUE_SAGA', updateBitcoinValue)
}

// Worker Update Bitcoin Value
function * updateBritaValue (action: any): any {
  try {
    yield put({ type: 'UPDATE_BRITA_VALUE', payload: action.payload })
  } catch (err) {
    console.error(err)
  }
}

// Watcher Update Value Value
export function * watchUpdateBritaValue (): any {
  yield takeLatest('UPDATE_BRITA_VALUE_SAGA', updateBritaValue)
}
