import { GetBitcoins } from '@/data/usecases/get-bitcoin-value/get-bitcoin-value'
import { BitcoinResultInterface } from '@/domain/models/bitcoin-result.interface'
import { GetBitcoinValue } from '@/domain/usecases/get-bitcoin-value/get-bitcoin-value.interface'
import { AxiosHttpGetClient } from '@/infra/axios-http-get/axios-http-get-client'
import { makeBitcoinApi } from '@/main/factories/api/bitcoin-api'

export const makeGetBitcoinValue = (): GetBitcoinValue => {
  return new GetBitcoins(makeBitcoinApi(), new AxiosHttpGetClient<BitcoinResultInterface>())
}
