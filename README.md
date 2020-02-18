
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


