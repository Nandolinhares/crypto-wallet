import React from 'react'
import { RenderResult, cleanup, fireEvent } from '@testing-library/react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import faker from 'faker'

import BuySellCryptoCard from './buy-sell-crypto-card.component'
// Redux Helper
import { renderWithProviders } from '../../helpers/test/redux-provider.helper'

type SutTypes = {
  sut: RenderResult
  inputValue: number
}

const history = createMemoryHistory({ initialEntries: ['/profile'] })

const makeSut = (): SutTypes => {
  const inputValue = faker.random.number()
  const sut = renderWithProviders(
    <Router history={history}>
      <BuySellCryptoCard />
    </Router>
  )

  return {
    sut,
    inputValue
  }
}

describe('Profile', () => {
  afterEach(cleanup)
  test('should inputMoney have the correct placeholder', () => {
    const { sut } = makeSut()
    const inputMoney = sut.getByTestId('input-money') as HTMLInputElement
    expect(inputMoney.placeholder).toBe('Quantidade em dinheiro')
  })

  test('should inputMoney shows the correct value', () => {
    const { sut, inputValue } = makeSut()
    const inputMoney = sut.getByTestId('input-money') as HTMLInputElement
    fireEvent.input(inputMoney, { target: { value: inputValue } })
    expect(inputMoney.value).toBe(inputValue.toString())
  })

  test('should dialog show error message about negative values', () => {
    const { sut } = makeSut()
    const inputMoney = sut.getByTestId('input-money') as HTMLInputElement
    fireEvent.input(inputMoney, { target: { value: -8 } })
    const submit = sut.getByTestId('submit-input-money')
    fireEvent.submit(submit)
    const dialogMessage = sut.getByTestId('dialog-message')
    expect(dialogMessage.textContent).toBe('Você não pode inserir valores negativos')
  })
})
