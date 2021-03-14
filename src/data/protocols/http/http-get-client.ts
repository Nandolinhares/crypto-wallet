import { HttpResponse } from './http-response'

export interface HttpGetClient<T> {
  get: (url: string, cancelToken: any) => Promise<HttpResponse<T>>
}
