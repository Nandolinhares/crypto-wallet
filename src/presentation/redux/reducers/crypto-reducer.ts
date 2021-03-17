import { UPDATE_BITCOIN_VALUE, UPDATE_BRITA_VALUE } from '../types/crypto-types'

type CryptoState = {
  bitcoin: string
  brita: string
}

const initialState = {
  bitcoin: '0',
  brita: '0'
}

export default function (state: CryptoState = initialState, action: any): any {
  switch (action.type) {
    case UPDATE_BITCOIN_VALUE:
      return {
        ...state,
        bitcoin: action.payload
      }
    case UPDATE_BRITA_VALUE:
      return {
        ...state,
        brita: action.payload
      }
    default:
      return state
  }
}
