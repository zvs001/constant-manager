
This is key store for your app. 
Includes typescript definitions.

[![npm](https://img.shields.io/npm/v/constant-manager)](https://www.npmjs.com/package/constant-manager)

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
