import React from 'react'
import Header from './header.component'
import { render, RenderResult } from '@testing-library/react'

type SutTypes = {
  sut: RenderResult
}

const makeSut = (): SutTypes => {
  const sut = render(
    <Header />
  )

  return {
    sut
  }
}

describe('App Component', () => {
  test('should have a h1 tag ', () => {
    const { sut } = makeSut()
    const h1 = sut.getByTestId('h1')
    expect(h1.textContent).toBe('CRYPTO WALLET')
  })

  test('should have 2 buttons on header', () => {
    const { sut } = makeSut()
    const ul = sut.getByTestId('ul')
    expect(ul.childElementCount).toBe(2)
  })
})
