// put here a provider that can be used in domain infrastructure implementation
// example:

import type { IHttpRequestService } from "@/modules/shared/repositories/http.interface";

const controller = new AbortController()
const signal = controller.signal;
export class HTTPServiceProvider implements IHttpRequestService {
  async get<Response>(url: string, params: Record<string, string>): Promise<Response> {
    const response = await fetch(`${url}?${new URLSearchParams(params)}`);
    const parsedResponse = await response.json()
    if (!response.ok) {
      const { code, status } = parsedResponse
      throw new Error(`${code}: ${status}`);
    };
    return parsedResponse;
  }

  async post<Response, Data>(url: string, body: Data): Promise<Response> {
    const send = await fetch(`${url}`, { 
      method: 'POST',
      body: JSON.stringify(body),
      signal
    });

    return await send.json()
  }
}