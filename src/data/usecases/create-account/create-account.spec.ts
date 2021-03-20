import { CreateAccount } from './create-account'
import { SetStorageMock } from '../../test/create-account/mock-create-account'
// Faker
import faker from 'faker'

describe('Create Account', () => {
  test('Should call SetStorage with correct username', () => {
    const setStorageMock = new SetStorageMock()
    const sut = new CreateAccount(setStorageMock)
    const username = faker.internet.userName()
    sut.create(username)
    expect(setStorageMock.username).toBe(username)
  })
})
