import { BritaResultInterface } from '@/domain/models/brita-result.interface'
import { HttpGetClient } from '../../../data/protocols/http/http-get-client'
import { HttpStatusCode } from '../../../data/protocols/http/http-response'
import { NotFoundError } from '../../../domain/errors/not-found-error'
import { UnexpectedError } from '../../../domain/errors/unexpected-error'
import { BitcoinResultInterface } from '../../../domain/models/bitcoin-result.interface'
import { GetCryptoValue } from '../../../domain/usecases/get-crypto-value/get-crypto-value.interface'

export class GetCrypto implements GetCryptoValue {
  constructor (
    private readonly url: string,
    private readonly httpGetClient: HttpGetClient<BitcoinResultInterface & BritaResultInterface>
  ) {}

  async show (cancelToken: any): Promise<BitcoinResultInterface & BritaResultInterface> {
    const httpResponse = await this.httpGetClient.get(this.url, cancelToken)

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return httpResponse.body
      case HttpStatusCode.notFound: throw new NotFoundError()
      default:
        throw new UnexpectedError()
    }
  }
}
