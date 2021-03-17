import { ReduxTypeReturn } from '../models/redux-type-return'

// Update Bitcoin Value
export const updateBitcoinValue = (bitcoin: string): ReduxTypeReturn => {
  return { type: 'UPDATE_BITCOIN_VALUE_SAGA', payload: bitcoin }
}

// Update Brita Value
export const updateBritaValue = (brita: string): ReduxTypeReturn => {
  return { type: 'UPDATE_BRITA_VALUE_SAGA', payload: brita }
}
