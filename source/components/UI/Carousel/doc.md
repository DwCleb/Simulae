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
      title: '',
      image: Logo,
      description: '',
    },
  ];

  return <Carousel data={DATA} />
```
