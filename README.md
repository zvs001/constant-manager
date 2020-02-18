
This is key store for your app with build in typescript definitions.

### Usage
```typescript

import keyManager from 'constant-manager'

export default keyManager(
  {
    SET: '',
    SET_TOKENS: '',
    SET_CUSTOM: 'CUSTOM_KEY'
  },
  { prefix: 'AUTH__' },
)

```


### IDE

Well integrated with webstorm.

![Image description](https://raw.githubusercontent.com/zvs001/constant-manager/master/doc/webstorm.jpg)
