import { StatementModel } from '../../../domain/models/statement/statement-model'
import { AccountModel } from '../../../domain/models/account-model/account-model.type'
import { PrepareChangeCryptosStatement } from './prepare-change-cryptos-statement'

type PrepareChangeCryptosType = {
  user: AccountModel
  cryptoOutputValue: number
  cryptoInputValue: number
  cryptoOutputName: string
  cryptoInputName: string
  qtdValue: string
}

type PrepareChangeCryptosOutputType = {
  message: string
  approved: boolean
  userUpdated: AccountModel
}

export const PrepareChangeCryptos = (params: PrepareChangeCryptosType): PrepareChangeCryptosOutputType => {
  let userUpdated: AccountModel = params.user
  let statementUpdated: StatementModel

  if (parseFloat(params.qtdValue) > 0) {
    // Verifica se o valor da crypto existente na conta ´maior ou igual ao digitado no input
    if ((parseFloat(params.user[`${params.cryptoOutputName}s`]) >= params.cryptoOutputValue)) {
      // Decrementa o valor da crypto que vai ser trocada
      const cryptoOutputResult = parseFloat(params.user[`${params.cryptoOutputName}s`]) - params.cryptoOutputValue
      // Incrementa o valor da crypto que foi adquirida
      const cryptoInputResult = parseFloat(params.user[`${params.cryptoInputName}s`]) + params.cryptoInputValue

      statementUpdated = PrepareChangeCryptosStatement({
        inputCryptoName: params.cryptoInputName,
        outputCryptoName: params.cryptoOutputName,
        inputCryptoValue: params.cryptoInputValue.toString(),
        outputCryptoValue: params.cryptoOutputValue.toString(),
        statementType: params.cryptoInputName === 'bitcoin' ? 'BRITA-BITCOIN' : 'BICOIN-BRITA'
      })

      userUpdated = {
        ...params.user,
        [`${params.cryptoOutputName}s`]: cryptoOutputResult,
        [`${params.cryptoInputName}s`]: cryptoInputResult,
        statement: [...params.user.statement, statementUpdated]
      }

      return {
        message: `${params.cryptoOutputName}s trocadas com sucesso`,
        approved: true,
        userUpdated
      }
    } else {
      return {
        message: `Você não tem ${params.cryptoOutputName}s suficientes`,
        approved: false,
        userUpdated
      }
    }
  } else {
    return {
      message: 'Você não pode inserir valores negativos',
      approved: false,
      userUpdated
    }
  }
}
