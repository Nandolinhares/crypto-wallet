export const ConvertRealToCrypto = (money: string, cryptoPrice?: string): number => {
  const moneyValue = parseFloat(money)
  const cryptoPriceValue = parseFloat(cryptoPrice)
  return moneyValue / cryptoPriceValue
}
