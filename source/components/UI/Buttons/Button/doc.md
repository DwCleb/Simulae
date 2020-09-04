## <a name="section-button"> Button </a>

### Description

A Touchable component that looks like a native button by Platform.
This component accept icons like parameters to render then. The icon library used is `Ion Icons`.

Some difference between platforms:
**iOS:** Using `TouchableOpacity` componente.
**Android:** Using `TouchableNativeFeedback` componente.

Both looks like the native button, but accept style override.

By default the button will be render a native style.

### Props

| Name               | Type                                                   | Required    | Default value    | Platform | Description                                                |
| ------------------ | ------------------------------------------------------ | ----------- | ---------------- | -------- | ---------------------------------------------------------- |
| title              | `String`                                               | `true`      | -                | both     | Set title Button, text inside container button.            |
| titleStyle         | `Object`                                               | `true`      | -                | both     | Define and override title style.                           |
| buttonStyle        | `Object`                                               | `true`      | -                | both     | Define and override button style.                          |
| opacity            | `Number`                                               | `false`     | -                | iOS      | Define the Active Opacity on `TouchableOpacity` component. |
| accessibilityLabel | `String`                                               | `should be` | `Button` + Title | both     | Important resource to support blindness features.          |
| variant            | `String` [primary, secondary, tertiary, pay, outlined] | `false`     | `primary`        | both     | Set button type.                                           |
| justIcon           | `Boolean`                                              | `false`     | -                | both     | Define to return just a icon withoua title in butotn.      |
| iconName           | `String`                                               | `false`     | -                | both     | Define the icon that will be appear in button.             |
| iconDirection      | `String`                                               | `false`     | start            | both     | Define the icon direction that will be appear in button.   |
| iconSize           | `Number`                                               | `false`     | 22               | both     | Define the icon size.                                      |
| iconColor          | `String`                                               | `false`     | Blue (System)    | both     | Define the icon color.                                     |
| styleIcon          | `Object`                                               | `false`     | -                | both     | Define the style about Icon Component.                     |
| onPress            | `Function`                                             | `true`      | `() => {}`       | both     | Function to execute some action on tap.                    |
| small              | `Boolean`                                              | `false`     | -                | both     | Define the button size.                                    |
| themeVariants      | `Object`                                               | `false`     | -                | both     | Define variant of button for both theme modes              |  |

### Usage example

```js
    ...
    return (
      <Button
        title="Login"
        primary
        accessibilityLabel="Tap to Login"
        onPress={() => Alert.alert('You taped me!'))}
      />
    )
  ...
```
