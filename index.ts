export interface KeyManagerActions {
  [key: string]: string | null
}

export interface KeyManagerOptions {
  prefix?: string
}

type KeyManagerResponse<T> = { readonly [P in keyof T]: string }

function keyManager<T>(actions: T & KeyManagerActions, options?: KeyManagerOptions): KeyManagerResponse<T> {
  const { prefix = '' } = options || {}

  const newActions = {} as KeyManagerResponse<T>

  Object.keys(actions).forEach(key => {
    const keyValue = actions[key] ? actions[key] : key
    newActions[key] = prefix + keyValue
  })

  return newActions
}

export default keyManager
