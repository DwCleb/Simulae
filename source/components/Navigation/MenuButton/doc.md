## MenuButton

### Description

Custom component to open side menu (drawer).

### Props

| Name      | Type       | Required | Default value | Description                                           |
| --------- | ---------- | -------- | ------------- | ----------------------------------------------------- |
| action    | `function` | `false`  | -             | Set function action on OnPress in `TouchableOpacity`. |
| color     | `string`   | `false`  | -             | Set icon color                                        |
| size      | `number`   | `false`  | -             | Set icon size                                         |
| styleIcon | `object`   | `false`  | -             | Set icon style                                        |

### Usage example

```js
    ...
    const { toggleDrawer } = navigation;
    return <MenuButton size={40} styleIcon={{ marginTop: 10 }} color={Colors.white} action={toggleDrawer()} />
```
