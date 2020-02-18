function index(actions, options = {}) {
  const { prefix = '' } = options

  const newActions = {}

  Object.keys(actions).forEach(key => {
    newActions[key] = prefix + (actions[key] ? actions[key] : key)
  })

  return newActions
}

export default index
