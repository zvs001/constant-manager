export interface KeyManagerActions {
  [key: string]: string | null
}

export interface KeyManagerOptions<PrefixT> {
  prefix?: `${string & PrefixT}`
}

type KeyManagerResponse<TObj, TPrefix extends string = ''> = {
  readonly [Key in keyof TObj as `${string & Key}`]: `${TPrefix}${string & Key}`
}

function keyManager<T, Prefix extends string = ''>(actions: T & KeyManagerActions, options?: KeyManagerOptions<Prefix>): KeyManagerResponse<T, Prefix> {
  const { prefix = '' } = options || {}


  const newActions = {} as KeyManagerResponse<T, Prefix>

  Object.keys(actions).forEach(key => {
    const keyValue = actions[key] ? actions[key] : key
    newActions[key] = prefix + keyValue
  })

  return newActions
}

export default keyManager
