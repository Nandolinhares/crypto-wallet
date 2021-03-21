import { HttpGetClient, HttpResponse, HttpStatusCode } from '../../protocols/http'

export class HttpGetClientSpy<T> implements HttpGetClient<T> {
  url?: string
  response: HttpResponse<T> = {
    statusCode: HttpStatusCode.ok
  }

  async get (url: string, cancelToken: any): Promise<HttpResponse<T>> {
    this.url = url
    return this.response
  }
}
