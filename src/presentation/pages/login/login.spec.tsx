import React from 'react'
import { RenderResult, cleanup, fireEvent, waitFor } from '@testing-library/react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import faker from 'faker'

import Login from './login'
// Redux Helper
import { renderWithProviders } from '../../helpers/test/redux-provider.helper'

type SutTypes = {
  sut: RenderResult
  inputValue: string
}

const history = createMemoryHistory({ initialEntries: ['/login'] })

const makeSut = (): SutTypes => {
  const inputValue = faker.internet.userName()
  const sut = renderWithProviders(
    <Router history={history}>
      <Login />
    </Router>
  )

  return {
    sut,
    inputValue
  }
}

describe('Login', () => {
  afterEach(cleanup)
  test('should login paper have a title and form components', () => {
    const { sut } = makeSut()

    const el = sut.getByTestId('login-signup-paper')
    expect(el.childElementCount).toBe(2)
  })

  test('should input have a correct placeholder', () => {
    const { sut } = makeSut()
    const loginInput = sut.getByTestId('login-input') as HTMLInputElement
    expect(loginInput.placeholder).toBe('Digite o seu usuário')
  })

  test('should input show correct value', async () => {
    const { sut, inputValue } = makeSut()
    const loginInput = sut.getByTestId('login-input') as HTMLInputElement
    fireEvent.input(loginInput, { target: { value: inputValue } })
    expect(loginInput.value).toBe(inputValue)
  })

  test('should returns error if user doesnt exists', async () => {
    const { sut, inputValue } = makeSut()
    const loginInput = sut.getByTestId('login-input') as HTMLInputElement
    fireEvent.input(loginInput, { target: { value: inputValue } })
    const form = sut.getByTestId('form')
    fireEvent.submit(form)
    await waitFor(() => form)
    expect(loginInput.title).toBe('Usuário não encontrado')
  })

  test('should returns error message if is a blank field', async () => {
    const { sut } = makeSut()
    const loginInput = sut.getByTestId('login-input') as HTMLInputElement
    fireEvent.input(loginInput, { target: { value: '' } })
    const form = sut.getByTestId('form')
    fireEvent.submit(form)
    await waitFor(() => form)
    expect(loginInput.title).toBe('O campo não pode estar em branco')
  })
})
