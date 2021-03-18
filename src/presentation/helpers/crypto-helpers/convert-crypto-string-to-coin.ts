export const ConvertCryptoStringToCoin = (value: string, currency?: string): string => {
  if (currency) {
    return parseFloat(value).toLocaleString('pt-br', { style: 'currency', currency })
  } else {
    return parseFloat(value).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
  }
}
