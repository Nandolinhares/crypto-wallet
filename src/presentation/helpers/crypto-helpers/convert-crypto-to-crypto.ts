import { ConvertRealToCrypto } from './convert-real-to-crypto'

type ConvertCryptoToCryptoType = {
  money: string
  cryptoToConvert: string
  cryptoDefault: string
}

type OutputConvertedCryptoToCryptoType = {
  cryptoInputValue: number
  cryptoOutputValue: number
}

export const ConvertCryptoToCrypto = (params: ConvertCryptoToCryptoType): OutputConvertedCryptoToCryptoType => {
  // Convertendo valor em reais para o campo da crypto selecionada
  const cryptoOutputValue = ConvertRealToCrypto(params.money, params.cryptoToConvert)
  const cryptoInputValue = ConvertRealToCrypto(params.money, params.cryptoDefault)
  return {
    cryptoOutputValue,
    cryptoInputValue
  }
}
