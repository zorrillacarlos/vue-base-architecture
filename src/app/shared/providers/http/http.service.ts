// put here a provider that can be used in domain infrastructure implementation
// example:
/*
  export class HTTPServiceProvider implements IHTTPService {
    async get<T>(url: string, params: Record<string, T>): Promise<T> {
      const response = await fetch(`${url}?${new URLSearchParams(params)}`);
      const parsedResponse = await response.json()
      if (!response.ok) {
        const { code, status } = parsedResponse
        throw new Error(`${code}: ${status}`);
      };
      return parsedResponse;
    }
  }
*/