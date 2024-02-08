// define an interface logic for http service behaviours
// exaple:
export interface IHttpRequestService {
  get<Response>(url: string, params?: Record<string, string>): Promise<Response>,
  post<ResponseType, Data>(url: string, body: Data): Promise<ResponseType>
}
