export interface KeyManagerActions {
  [key: string]: string | null
}

export interface KeyManagerOptions {
  prefix?: string
}

type KeyManagerResponse<T> = { readonly [P in keyof T]: string }

// export default function<T>(actions: T & KeyManagerActions, options: KeyManagerOptions)

function keyManager<T = {}>(actions: T & KeyManagerActions, options: KeyManagerOptions = {}): KeyManagerResponse<T> {
  const { prefix = '' } = options

  const newActions = {}

  Object.keys(actions).forEach(key => {
    newActions[key] = prefix + (actions[key] ? actions[key] : key)
  })

  return newActions as KeyManagerResponse<T>
}

export default keyManager
