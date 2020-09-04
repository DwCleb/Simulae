```jsx
// TODO: create a Wrapper to react-styleguidist to provide theme to all components shown
import ThemeManager from '../../../theme/ThemeContext';
import Stepper from '.';

import { View } from 'react-native';

<ThemeManager>
  <View style={{ height: 50 }}>
    <Stepper length={7} acticeDotIndex={3} />
  </View>
</ThemeManager>;
```
