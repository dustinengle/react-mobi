
export class Fetcher {
  private host: string
  private mode: RequestMode
  private token?: string

  constructor(host: string = 'https://www.mobiloans.com', mode: RequestMode = 'cors') {
    this.host = host
    this.mode = mode
  }

  private headers(): Headers {
    const headers = new Headers()
    headers.set('Content-Type', 'application/json')
    if (this.token) headers.set('Authorization', `Bearer ${this.token}`)
    return headers
  }

  private async request(method: string, route: string, body?: BodyInit): Promise<Response> {
    const headers = this.headers()
    // Remove the content type to allow for the web browser to set it.
    //  https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects
    if (body && body instanceof FormData) headers.set('Content-Type', 'application/x-www-form-urlencoded')

    const init: RequestInit = {
      body,
      headers,
      method,
      mode: this.mode,
    }
    console.log(method, route, body, init)
    const response: Response = await fetch(`${this.host}${route}`, init)
    console.log(response)
    if (!response.ok) return Promise.reject(new Error(`${response.status} ${response.statusText}`))
    return await response.json()
  }

  auth(token: string) {
    this.token = token
  }

  deauth() {
    this.token = undefined
  }

  async del<T>(route: string): Promise<T> {
    return await this.request('DELETE', route) as T
  }

  async get<T>(route: string): Promise<T> {
    return await this.request('GET', route) as T
  }

  async post<T>(route: string, body?: BodyInit): Promise<T> {
    return await this.request('POST', route, body) as T
  }

  async put<T>(route: string, body: BodyInit): Promise<T> {
    return await this.request('PUT', route, body) as T
  }
}
