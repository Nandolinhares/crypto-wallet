import 'jest-localstorage-mock'
import faker from 'faker'
import { LocalStorageSetAdapter } from './local-storage-set-adapter'

const makeSut = (): LocalStorageSetAdapter => new LocalStorageSetAdapter()

describe('LocalStorageSetAdapter', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  test('Should call localStorage with correct values', async () => {
    const sut = makeSut()
    const key = faker.database.column()
    const value = faker.random.word()
    await sut.set(key, value)
    expect(localStorage.setItem).toHaveBeenCalledWith(key, value)
  })
})
