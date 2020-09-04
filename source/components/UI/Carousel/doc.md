## <a name="section-carousel"> Carousel </a>

### Description

A carousel component to render diferent items in template.

### Props

| Name               | Type       | Required | Default | Description                                                  |
| ------------------ | ---------- | -------- | ------- | ------------------------------------------------------------ |
| data               | `Object[]` | `true`   | -       | Array with data that will be render inside item by template. |
| templateItem       | `String`   | `false`  | explore | Set item template that will be render                        |
| templatePagination | `String`   | `false`  | explore | Set pagination template that will be render                  |

### Usage example

```js
  ...
  const DATA = [
    {
      title: 'Welcome to Jawwy',
      image: Logo,
      description: 'Join us! Personalise, track and manage your prepaid plan in real time.',
    },
    {
      title: 'Your plan, your way',
      image: Step2,
      description: 'We give you Unlimited Voice and SMS.\nJust select the data, add-ons and validity.',
    }
  ];

  return <Carousel data={DATA} />
```
