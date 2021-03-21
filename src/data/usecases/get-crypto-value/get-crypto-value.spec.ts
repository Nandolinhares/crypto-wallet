import { GetCrypto } from './get-crypto-value'
import { HttpGetClientSpy } from '../../test/mock-http/mock-http'
import { BitcoinResultInterface } from '../../../domain/models/bitcoin-result.interface'
import { BritaResultInterface } from '../../../domain/models/brita-result.interface'
import { HttpStatusCode } from '../../protocols/http'
import { UnexpectedError } from '../../../domain/errors/unexpected-error'
import { NotFoundError } from '../../../domain/errors/not-found-error'
import faker from 'faker'
import axios from 'axios'

type SutTypes = {
  sut: GetCrypto
  httpGetClientSpy: HttpGetClientSpy<BitcoinResultInterface & BritaResultInterface>
}

// SUT
const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpGetClientSpy = new HttpGetClientSpy<BitcoinResultInterface & BritaResultInterface>()
  const sut = new GetCrypto(url, httpGetClientSpy)
  return {
    sut,
    httpGetClientSpy
  }
}

describe('GetCryptoValue', () => {
  test('should call HttpGetClient with correct URL', async () => {
    const url = faker.internet.url()
    const cancelTokenSource = axios.CancelToken.source()
    const { sut, httpGetClientSpy } = makeSut(url)
    await sut.show(cancelTokenSource)
    expect(httpGetClientSpy.url).toBe(url)
  })

  test('Should throw UnexpectedError if HttpGetClient returns 500', async () => {
    const { sut, httpGetClientSpy } = makeSut()
    httpGetClientSpy.response = {
      statusCode: HttpStatusCode.serverError
    }
    const promise = sut.show(axios.CancelToken.source())
    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  test('Should throw NotFoundError if HttpGetClient returns 404', async () => {
    const { sut, httpGetClientSpy } = makeSut()
    httpGetClientSpy.response = {
      statusCode: HttpStatusCode.notFound
    }
    const promise = sut.show(axios.CancelToken.source())
    await expect(promise).rejects.toThrow(new NotFoundError())
  })
})
