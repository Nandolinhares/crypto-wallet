import { BitcoinResultInterface } from '@/domain/models/bitcoin-result.interface'

export interface GetBitcoinValue {
  show: () => Promise<BitcoinResultInterface>
}
