import { ConvertCryptoStringToCoin } from '../../helpers/crypto-helpers/convert-crypto-string-to-coin'

// Interfaca das colunas da tabela de extrato
export interface Column {
  id: 'inputMoneyValue' | 'outputMoneyValue' | 'bitcoin' | 'brita' | 'dateStatement' | 'statementType'
  label: string
  minWidth?: number
  align?: 'right'
  format?: (value: string) => string
  statementType?: (value: string) => string
}

// Definindo cabeçalho da tabela de forma manual
export const columns: Column[] = [
  {
    id: 'inputMoneyValue',
    label: 'VALOR COMPRA / VENDA R$',
    minWidth: 170,
    format: (value: string) => ConvertCryptoStringToCoin(value)
    // statementType: (state: string) => state === 'COMPRA'
  },

  {
    id: 'outputMoneyValue',
    label: 'SALDO R$',
    minWidth: 170,
    format: (value: string) => ConvertCryptoStringToCoin(value)
  },

  {
    id: 'bitcoin',
    label: 'Bitcoins',
    minWidth: 170,
    format: (value: string) => ConvertCryptoStringToCoin(value, 'BTC')
  },
  {
    id: 'brita',
    label: 'Britas',
    minWidth: 170,
    format: (value: string) => ConvertCryptoStringToCoin(value, 'USD')
  },
  {
    id: 'dateStatement',
    label: 'Data da transação',
    format: (value: string) => value.slice(0, 10)
  },
  {
    id: 'statementType',
    label: 'OPERAÇÃO'
  }
]

// Interface dos dados da tabela
export interface Data {
  inputMoneyValue: string
  outputMoneyValue: string
  bitcoin: string
  brita: string
  dateStatement: string
  statementType?: string
}
