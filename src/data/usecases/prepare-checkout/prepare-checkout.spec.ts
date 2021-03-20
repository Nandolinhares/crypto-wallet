import { PrepareCheckout } from './prepare-checkout'
import { mockCheckoutParams } from '../../test/prepare-checkout/mock-prepare-checkout'
// import faker from 'faker'

type SutTypes = {
  sut: PrepareCheckout
}

const makeSut = (): SutTypes => {
  const sut = new PrepareCheckout()
  return {
    sut
  }
}

describe('PrepareCheckout', () => {
  test('should return error if User select negative values', () => {
    const { sut } = makeSut()
    const mock = mockCheckoutParams()
    mock.qtdValue = '-1'
    expect(sut.finish(mock)).toEqual({
      error: true,
      message: 'Você não pode inserir valores negativos'
    })
  })

  test('should return error if User has less cryptos than he types', () => {
    const { sut } = makeSut()
    const mock = mockCheckoutParams()
    mock.qtdValue = '100'
    mock.stateSelected = 1
    mock.user.money = '10000'
    mock.user.bitcoins = '0'
    mock.cryptoName = 'bitcoin'
    expect(sut.finish(mock)).toMatchObject({
      error: true,
      message: 'Você não tem bitcoin suficientes'
    })
  })

  test('should return error if User doesnt have money to buy cryptos', () => {
    const { sut } = makeSut()
    const mock = mockCheckoutParams()
    mock.qtdValue = '100'
    mock.stateSelected = 0
    mock.user.money = '1'
    mock.user.bitcoins = '0'
    mock.cryptoName = 'bitcoin'
    expect(sut.finish(mock)).toMatchObject({
      error: true,
      message: 'Você não tem dinheiro suficiente'
    })
  })

  test('should return succesful if User buy cryptos', () => {
    const { sut } = makeSut()
    const mock = mockCheckoutParams()
    mock.qtdValue = '100'
    mock.stateSelected = 0
    mock.user.money = '100000'
    mock.user.bitcoins = '0'
    mock.cryptoName = 'bitcoin'
    expect(sut.finish(mock)).toMatchObject({
      error: false,
      message: '100 reais em bitcoins comprados com sucesso!'
    })
  })

  test('should return succesful if User sell cryptos', () => {
    const { sut } = makeSut()
    const mock = mockCheckoutParams()
    mock.qtdValue = '100'
    mock.stateSelected = 1
    mock.user.money = '100000'
    mock.user.bitcoins = '1'
    mock.cryptoName = 'bitcoin'
    expect(sut.finish(mock)).toMatchObject({
      error: false,
      message: '100 reais em bitcoins vendidos com sucesso!'
    })
  })
})
