import { AxiosHttpGetClient } from './axios-http-get-client'
import { mockAxios } from '../test/axios/mock-axios'
import faker from 'faker'
import axios from 'axios'

type SutTypes = {
  sut: AxiosHttpGetClient<any>
  mockedAxios: jest.Mocked<typeof axios>
}

const makeSut = (): SutTypes => {
  const sut = new AxiosHttpGetClient<any>()
  const mockedAxios = mockAxios()
  return {
    sut,
    mockedAxios
  }
}

describe('AxiosHttpGetClient', () => {
  test('Should return the correct statusCode and body on failure', () => {
    const { sut, mockedAxios } = makeSut()
    mockedAxios.get.mockRejectedValueOnce({
      response: { data: 'ok' }
    })
    const promise = sut.get(faker.internet.url(), axios.CancelToken.source())
    expect(promise).toEqual(mockedAxios.get.mock.results[0].value) // 0 É resolved e 1 rejecteds. Comparando promise com promise
  })
})
