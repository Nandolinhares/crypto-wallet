import axios from 'axios'

export const mockAxios = (): jest.Mocked<typeof axios> => {
  const mockedAxios = axios as jest.Mocked<typeof axios>

  mockedAxios.get = jest.fn().mockResolvedValue({
    data: []
  })

  return mockedAxios
}
