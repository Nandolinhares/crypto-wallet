import { GetCrypto } from '../../../data/usecases/get-crypto-value/get-crypto-value'
import { BritaResultInterface } from '../../../domain/models/brita-result.interface'
import { GetCryptoValue } from '../../../domain/usecases/get-crypto-value/get-crypto-value.interface'
import { BitcoinResultInterface } from '../../../domain/models/bitcoin-result.interface'
import { AxiosHttpGetClient } from '../../../infra/axios-http-get/axios-http-get-client'
import { makeBritaApi } from '../api/brita-api'

export const makeGetBritaValue = (): GetCryptoValue => {
  return new GetCrypto(makeBritaApi(), new AxiosHttpGetClient<BitcoinResultInterface & BritaResultInterface>())
}
