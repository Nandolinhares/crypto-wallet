import { HttpGetClient } from '../../../data/protocols/http/http-get-client'
import { HttpStatusCode } from '../../../data/protocols/http/http-response'
import { NotFoundError } from '../../../domain/errors/not-found-error'
import { UnexpectedError } from '../../../domain/errors/unexpected-error'
import { BitcoinResultInterface } from '../../../domain/models/bitcoin-result.interface'
import { GetBitcoinValue } from '../../../domain/usecases/get-bitcoin-value/get-bitcoin-value.interface'

export class GetBitcoins implements GetBitcoinValue {
  constructor (
    private readonly url: string,
    private readonly httpGetClient: HttpGetClient<BitcoinResultInterface>
  ) {}

  async show (cancelToken: any): Promise<BitcoinResultInterface> {
    const httpResponse = await this.httpGetClient.get(this.url, cancelToken)

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return httpResponse.body
      case HttpStatusCode.notFound: throw new NotFoundError()
      default:
        throw new UnexpectedError()
    }
  }
}
