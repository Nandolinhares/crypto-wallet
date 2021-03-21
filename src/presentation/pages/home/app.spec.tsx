import React from 'react'
import { RenderResult } from '@testing-library/react'
import App from './app'
// Redux Helper
import { renderWithProviders } from '../../helpers/test/redux-provider.helper'

type SutTypes = {
  sut: RenderResult
}

const makeSut = (): SutTypes => {
  const sut = renderWithProviders(<App />)

  return {
    sut
  }
}

describe('App', () => {
  test('should starter content home text have a title and description', () => {
    const { sut } = makeSut()

    const el = sut.getByTestId('home-text')
    expect(el.childElementCount).toBe(2)
  })

  test('shoult starter content bitcoin card have one bitcoin card', () => {
    const { sut } = makeSut()

    const el = sut.getByTestId('bitcoin-card')
    expect(el.childElementCount).toBe(1)
  })

  test('shoult starter content brita card have one brita card', () => {
    const { sut } = makeSut()

    const el = sut.getByTestId('brita-card')
    expect(el.childElementCount).toBe(1)
  })
})
