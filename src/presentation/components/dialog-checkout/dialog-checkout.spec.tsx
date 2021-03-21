import React from 'react'
import { RenderResult, cleanup } from '@testing-library/react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

import DialogCheckout from './dialog-checkout.component'
// Redux Helper
import { renderWithProviders } from '../../helpers/test/redux-provider.helper'

type SutTypes = {
  sut: RenderResult
}

const history = createMemoryHistory({ initialEntries: ['/profile'] })

const makeSut = (messageNew?: string): SutTypes => {
  const props = {
    error: true,
    message: messageNew || 'Você não pode inserir valores negativos',
    open: true
  }
  const sut = renderWithProviders(
    <Router history={history}>
      <DialogCheckout openDialogInformation={props} setOpenDialogInformation="" />
    </Router>
  )

  return {
    sut
  }
}

describe('Profile', () => {
  afterEach(cleanup)

  test('should dialog show error message about negative values', () => {
    const { sut } = makeSut()
    const dialogMessage = sut.getByTestId('dialog-message')
    expect(dialogMessage.textContent).toBe('Você não pode inserir valores negativos')
  })

  test('should dialog show bitcoins compradas com sucesso', () => {
    const { sut } = makeSut('200 bitcoin compradas com sucesso')
    const dialogMessage = sut.getByTestId('dialog-message')
    expect(dialogMessage.textContent).toBe('200 bitcoin compradas com sucesso')
  })
  // Teste
  test('should dialog show bitcoins compradas com sucesso', () => {
    const { sut } = makeSut('200 bitcoin vendidas com sucesso')
    const dialogMessage = sut.getByTestId('dialog-message')
    expect(dialogMessage.textContent).toBe('200 bitcoin vendidas com sucesso')
  })
})
