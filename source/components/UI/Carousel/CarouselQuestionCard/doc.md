## <a name="section-carousel-item"> CarouselItem </a>

### Description

A template item to render inside of Carousel component.

### Props

| Name        | Type          | Required | Default | Description                                      |
| ----------- | ------------- | -------- | ------- | ------------------------------------------------ |
| title       | `String`      | `true`   | -       | Text that will be component title.               |
| image       | `JSX.Element` | `true`   | -       | Image that will be render in center of component |
| description | `String`      | `true`   | -       | Set item template that will be render            |

### Usage example

```js
  ...
  return <CarouselItem title="Question 1" image={Logo} description="What is your name?" />
```
