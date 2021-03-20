import { AccountModel } from '../../../domain/models/account-model/account-model.type'

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
  console.log(params.qtdValue)
  if (parseFloat(params.qtdValue) > 0) {
    if ((parseFloat(params.user[`${params.cryptoOutputName}s`]) >= params.cryptoOutputValue)) {
      userUpdated = {
        ...params.user,
        [`${params.cryptoOutputName}s`]: parseFloat(params.user[`${params.cryptoOutputName}s`]) - params.cryptoOutputValue,
        [`${params.cryptoInputName}s`]: parseFloat(params.user[`${params.cryptoInputName}s`]) + params.cryptoInputValue
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
