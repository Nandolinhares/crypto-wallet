import React from 'react'
import { RenderResult, cleanup, fireEvent, waitFor } from '@testing-library/react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import faker from 'faker'

import Signup from './signup'
// Redux Helper
import { renderWithProviders } from '../../helpers/test/redux-provider.helper'

type SutTypes = {
  sut: RenderResult
  inputValue: string
}

const history = createMemoryHistory({ initialEntries: ['/signup'] })

const makeSut = (): SutTypes => {
  const inputValue = faker.internet.userName()
  const sut = renderWithProviders(
    <Router history={history}>
      <Signup />
    </Router>
  )

  return {
    sut,
    inputValue
  }
}

describe('App', () => {
  afterEach(cleanup)
  test('should Signup paper have a title and form components', () => {
    const { sut } = makeSut()

    const el = sut.getByTestId('login-signup-paper')
    expect(el.childElementCount).toBe(2)
  })

  test('should input have a correct placeholder', () => {
    const { sut } = makeSut()
    const signupInput = sut.getByTestId('signup-input') as HTMLInputElement
    expect(signupInput.placeholder).toBe('Cadastre o seu usuário')
  })

  test('should input show correct value', async () => {
    const { sut, inputValue } = makeSut()
    const signupInput = sut.getByTestId('signup-input') as HTMLInputElement
    fireEvent.input(signupInput, { target: { value: inputValue } })
    expect(signupInput.value).toBe(inputValue)
  })

  test('should returns user to /profile', async () => {
    const { sut, inputValue } = makeSut()
    const signupInput = sut.getByTestId('signup-input') as HTMLInputElement
    fireEvent.input(signupInput, { target: { value: inputValue } })
    const form = sut.getByTestId('form')
    fireEvent.submit(form)
    await waitFor(() => form)
    expect(history.location.pathname).toBe('/profile')
  })

  test('should returns error message if is a blank field', async () => {
    const { sut } = makeSut()
    const signupInput = sut.getByTestId('signup-input') as HTMLInputElement
    fireEvent.input(signupInput, { target: { value: '' } })
    const form = sut.getByTestId('form')
    fireEvent.submit(form)
    await waitFor(() => form)
    expect(signupInput.title).toBe('O campo não pode estar em branco')
  })
})
