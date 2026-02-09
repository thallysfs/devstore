import { env } from '@/env'

export function api(path: string, init?: RequestInit) {
  const baseUrl = env.NEXT_PUBLIC_API_BASE_URL
  const url = new URL(path, baseUrl) // URL é uma função nativa que concatena o caminho com a url. Ex: product + http:localhost:3000/api => http:localhost:3000/api/product

  return fetch(url, init)
}