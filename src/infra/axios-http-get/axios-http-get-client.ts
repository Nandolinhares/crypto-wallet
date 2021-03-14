import { HttpGetClient } from '../../data/protocols/http/http-get-client'
import { HttpResponse } from '../../data/protocols/http/http-response'
import axios, { AxiosResponse } from 'axios'

export class AxiosHttpGetClient<T> implements HttpGetClient<T> {
  async get (url: string, cancelToken: any): Promise<HttpResponse<T>> {
    let httpResponse: AxiosResponse<any>
    try {
      httpResponse = await axios.get(url, { cancelToken: cancelToken })
    } catch (error) {
      httpResponse = error.response
    }

    return {
      statusCode: httpResponse.status,
      body: httpResponse.data
    }
  }
}
