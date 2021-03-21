export const ConvertCryptoStringToCoin = (value: string, currency?: string, max?: number): string => {
  if (currency) {
    return parseFloat(value).toLocaleString('pt-br', { style: 'currency', currency, minimumFractionDigits: 0, maximumFractionDigits: max || 10 })
  } else {
    return parseFloat(value).toLocaleString('pt-br', { style: 'currency', currency: 'BRL', minimumFractionDigits: 0, maximumFractionDigits: max || 10 })
  }
}
