import React from 'react'
import App from './app'
import { render, RenderResult } from '@testing-library/react'

type SutTypes = {
  sut: RenderResult
}

const makeSut = (): SutTypes => {
  const sut = render(
    <App />
  )

  return {
    sut
  }
}

describe('App Component', () => {
  test('should have a h1 tag ', () => {
    const { sut } = makeSut()
    const h1 = sut.getByTestId('h1')
    expect(h1.textContent).toBe('Hello World')
  })
})
