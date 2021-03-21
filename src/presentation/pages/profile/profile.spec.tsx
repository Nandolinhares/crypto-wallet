import React from 'react'
import { RenderResult, cleanup } from '@testing-library/react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import faker from 'faker'

import Profile from './profile'
// Redux Helper
import { renderWithProviders } from '../../helpers/test/redux-provider.helper'

type SutTypes = {
  sut: RenderResult
  inputValue: string
}

const history = createMemoryHistory({ initialEntries: ['/profile'] })

const makeSut = (): SutTypes => {
  const inputValue = faker.internet.userName()
  const sut = renderWithProviders(
    <Router history={history}>
      <Profile />
    </Router>
  )

  return {
    sut,
    inputValue
  }
}

describe('Profile', () => {
  afterEach(cleanup)
  test('should profile dashboard to have 3 card components', () => {
    const { sut } = makeSut()
    const el = sut.getByTestId('dashboard')
    expect(el.childElementCount).toBe(3)
  })

  test('should statementDiv have 2 html elements', () => {
    const { sut } = makeSut()
    const el = sut.getByTestId('negociacoes')
    expect(el.childElementCount).toBe(2)
  })
})
