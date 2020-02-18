declare module 'key-manager'

interface KeyManagerActions {
  [key: string]: string | null
}

interface KeyManagerOptions {
  prefix?: string
}

type KeyManagerResponse<T> = { readonly [P in keyof T]: string }

export default function<T>(actions: T & KeyManagerActions, options: KeyManagerOptions): KeyManagerResponse<T>
