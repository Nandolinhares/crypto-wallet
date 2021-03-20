import { AccountModel } from '../../../domain/models/account-model/account-model.type'
import { StatementModel } from '../../../domain/models/statement/statement-model'
import { CheckoutModel } from '../../../domain/models/checkout-model/checkout-model.type'
import { CheckoutParams } from '../../../domain/usecases/checkout/checkout.interface'
import { ConvertRealToCrypto } from '../crypto-helpers/convert-real-to-crypto'
import { PrepareStatement } from './prepare-statement.helper'

export const CalculateCheckout = (params: CheckoutParams, operator: string): CheckoutModel => {
  // Local definitions
  let moneyUpdated: string = params.user.money
  let cryptoUpdated: string = params.user[`${params.cryptoName}s`]
  let error: boolean = false
  let message: string = ''
  let statementUpdated: StatementModel

  // Valor da criptomoeda em relação a quantidade de dinheiro inserida
  const cryptoValue = (ConvertRealToCrypto(params.qtdValue, params.cryptoPrice)).toString()
  // Operação de venda
  if (operator === '+') {
    if (parseFloat(params.user[`${params.cryptoName}s`]) >= parseFloat(cryptoValue)) {
      // Atribui valor em reais
      moneyUpdated = (parseFloat(params.user.money) + parseFloat(params.qtdValue)).toString()
      // Subtrai os valores na cryptomoeda
      cryptoUpdated = (parseFloat(params.user[`${params.cryptoName}s`]) - parseFloat(cryptoValue)).toString()
      // Preparando o extrato da transação
      statementUpdated = PrepareStatement({
        inputMoneyValue: params.qtdValue,
        outputMoneyValue: moneyUpdated,
        outputCryptoName: params.cryptoName,
        outputCryptoValue: cryptoValue,
        outputCryptoUpdated: cryptoUpdated,
        statementType: 'VENDA'
      })
      // Mensagem positiva de venda
      message = `${params.qtdValue} reais em ${params.cryptoName}s vendidos com sucesso!`
    } else {
      error = true
      message = `Você não tem ${params.cryptoName} suficientes`
    }
    // Operação de compra
  } else {
    if (parseFloat(params.user.money) >= parseFloat(params.qtdValue)) {
      // Subtrai os valores em reais
      moneyUpdated = (parseFloat(params.user.money) - parseFloat(params.qtdValue)).toString()
      // Atribui os valores em cryptomoeda
      cryptoUpdated = (parseFloat(params.user[`${params.cryptoName}s`]) + parseFloat(cryptoValue)).toString()
      // Preparando o extrato da transação
      statementUpdated = PrepareStatement({
        inputMoneyValue: params.qtdValue,
        outputMoneyValue: moneyUpdated,
        outputCryptoName: params.cryptoName,
        outputCryptoValue: cryptoValue,
        outputCryptoUpdated: cryptoUpdated,
        statementType: 'COMPRA'
      })
      // Mensagem positiva de compra
      message = `${params.qtdValue} reais em ${params.cryptoName}s comprados com sucesso!`
    } else {
      error = true
      message = 'Você não tem dinheiro suficiente'
    }
  }

  const userUpdated: AccountModel = {
    ...params.user,
    money: moneyUpdated,
    [`${params.cryptoName}s`]: cryptoUpdated,
    statement: [...params.user.statement, statementUpdated]
  }

  return {
    message,
    error,
    data: userUpdated
  }
}
