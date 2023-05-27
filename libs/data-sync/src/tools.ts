export const HEADER_KEY = 'x-vulppi-client'
export const HEADER_VALUE = 'vulppi-datasync-client'

const idChars = 'abcdefghijklmnopqrstuvwxyz0123456789'

export function clearOptions(opt: any) {
  delete opt.port
  delete opt.noServer
}

export function genGUID(size: number = 20) {
  let id = ''
  for (let i = 0; i < size; i++) {
    id += idChars[Math.floor(Math.random() * idChars.length)]
  }
  return id
}

export interface ValidationData {
  /**
   * Cause use in header request Authorization type Bearer,
   * the token is loaded.
   */
  token?: string
  /**
   * Cause use in header request Authorization type Basic,
   * the user and pass is loaded.
   */
  user?: string
  /**
   * Cause use in header request Authorization type Basic,
   * the user and pass is loaded.
   */
  pass?: string
  /**
   * The query params is loaded.
   */
  params: URLSearchParams
}

export interface CommandData {
  command: string
  agent: 'server' | 'client' | 'anonymous'
  data: Record<string, any>
}
