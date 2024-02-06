// define an interface logic for http service behaviours
// exaple:
export interface IHttpRequestService {
  get<T>(url: string, params?: Record<string, string>): Promise<T>
}
