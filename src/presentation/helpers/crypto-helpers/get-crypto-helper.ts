import { makeGetBitcoinValue, makeGetBritaValue } from '../../../main/factories/usecases'
import { updateBitcoinValue, updateBritaValue } from '../../redux/actions/crypto-actions'

export const getCryptoHelper = async (cryptoName: string, cancelToken: any, dispatch: any): Promise<any> => {
  let httpResponse: any
  try {
    switch (cryptoName) {
      case 'Bitcoin':
        httpResponse = await makeGetBitcoinValue().show(cancelToken)
        dispatch(updateBitcoinValue(httpResponse.ticker.last))
        break
      case 'Brita':
        httpResponse = await makeGetBritaValue().show(cancelToken)
        dispatch(updateBritaValue(httpResponse.USD.bid))
        break
      default:
        httpResponse = await makeGetBitcoinValue().show(cancelToken)
        break
    }
  } catch (error) {
    httpResponse = error.response
  }
  return httpResponse
}
