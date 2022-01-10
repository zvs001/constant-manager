import keyManager from '../index'

const objBasic = keyManager({
  SET: '',
})

const a1: 'SET' = objBasic.SET

const objWithPrefix = keyManager(
  {
    SET_2: '',
  },
  { prefix: 'PREFIX@' },
)

const a2: 'PREFIX@SET_2' = objWithPrefix.SET_2 // value must be 'PREFIX@SET_2'

// todo...
// const objWithCustomName = keyManager(
//   {
//     SET: 'SET_CUSTOM',
//   },
//   { prefix: 'PREFIX@' },
// )
//
// const a3: 'PREFIX@SET_CUSTOM' = objWithCustomName.SET
