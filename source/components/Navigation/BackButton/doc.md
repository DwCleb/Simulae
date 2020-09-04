## <a name="section-back-button"> BackButton </a>

### Description

Custom component to replace a native back button on navigation header.

### Props

| Name   | Type       | Required | Default value | Description                                           |
| ------ | ---------- | -------- | ------------- | ----------------------------------------------------- |
| action | `function` | `false`  | -             | Set function action on OnPress in `TouchableOpacity`. |

### Usage example

```js
    ...
    const { navigate } = navigation;
    return <BackButton action={() => navigate('Shop')} />
```
