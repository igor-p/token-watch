export function generateQueryParams(params: Record<string, string | boolean>) {
  return Object.entries(params)
    .map(([key, value]) => `${key}=${value}`)
    .join("&")
}
