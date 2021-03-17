export const ConvertCryptoStringToCoin = (value: string): string => {
  return parseFloat(value).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
}
