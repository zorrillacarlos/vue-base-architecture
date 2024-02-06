// put here a provider that can be used in domain infrastructure implementation
// example:
import type { IHttpRequestService } from "../../../../domains/shared/repositories/http.interface";
export class HTTPServiceProvider implements IHttpRequestService {
  async get<T>(url: string, params: Record<string, string>): Promise<T> {
    const response = await fetch(`${url}?${new URLSearchParams(params)}`);
    const parsedResponse = await response.json()
    if (!response.ok) {
      const { code, status } = parsedResponse
      throw new Error(`${code}: ${status}`);
    };
    return parsedResponse;
  }
}