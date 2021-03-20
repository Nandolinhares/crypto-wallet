export const ConvertCryptoStringToCoin = (value: string, currency?: string): string => {
  if (currency) {
    return parseFloat(value).toLocaleString('pt-br', { style: 'currency', currency, minimumFractionDigits: 0, maximumFractionDigits: 10 })
  } else {
    return parseFloat(value).toLocaleString('pt-br', { style: 'currency', currency: 'BRL', minimumFractionDigits: 0, maximumFractionDigits: 10 })
  }
}
