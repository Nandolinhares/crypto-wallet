import { CreateAccount } from './create-account'
import { SetStorageMock } from '../../test/create-account/mock-create-account'
// Faker
import faker from 'faker'

type SutTypes = {
  sut: CreateAccount
  setStorageMock: SetStorageMock
}

// O que vai ser testado
const makeSut = (): SutTypes => {
  const setStorageMock = new SetStorageMock()
  const sut = new CreateAccount(setStorageMock)
  return {
    sut,
    setStorageMock
  }
}

describe('Create Account', () => {
  test('Should call SetStorage with correct username', () => {
    const { sut, setStorageMock } = makeSut()
    const username = faker.internet.userName()
    sut.create(username)
    expect(setStorageMock.username).toBe(username)
  })
})
