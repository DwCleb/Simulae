import React from 'react';
import { Text } from 'react-native';
import { create, ReactTestRenderer, act } from 'react-test-renderer';
import { ThemeProvider } from 'styled-components/native';

import { Carousel } from '~/components';

import { CarouselProps } from '~/components/UI/Carousel';

import darkTheme from '~/theme/ThemeContext/dark';

let wrapper: ReactTestRenderer;
let root: ReactTestRenderer['root'];

const FakeCarouselItem = ({ item }: { item: { label: string } }): JSX.Element => <Text>{item.label}</Text>;
const FakePagination = (): JSX.Element => <Text>Pagination</Text>;

const handleChangeEvent = jest.fn();

const props: CarouselProps = { data: [{ label: 'mock 1' }, { label: 'mock 2' }], CarouselItem: FakeCarouselItem };

const theme = darkTheme.theme;

const componentToTest = (componentProps: CarouselProps): JSX.Element => (
  <ThemeProvider theme={theme}>
    <Carousel {...componentProps} />
  </ThemeProvider>
);

describe('<Carousel />', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  beforeEach(() => {
    wrapper = create(componentToTest(props));
    root = wrapper.root;
  });

  it('Should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Should render all the necessary components - mandatory props', () => {
    expect(root.findAllByType(Carousel)).toHaveLength(1);

    expect(root.findAllByType(FakeCarouselItem)).toHaveLength(props.data.length);
  });

  it('Should render with pagination prop', () => {
    const newProps = { ...props, Pagination: FakePagination };

    wrapper = create(componentToTest(newProps));
    root = wrapper.root;

    expect(root.findAllByType(Carousel)).toHaveLength(1);
    expect(root.findAllByType(Text)).toHaveLength(props.data.length + 1);
    expect(root.findAllByType(Text)[2].props.children).toEqual('Pagination');
  });

  it('Should trigger handleChange function if carousel onSnapToItem happens', () => {
    const newProps = { ...props, handleChange: handleChangeEvent };

    wrapper = create(componentToTest(newProps));
    root = wrapper.root;

    //TODO: Review this type, it works but its not intended to be like this
    //@ts-ignore
    const carouselElement = root.findAllByType('RCTScrollView')[0];

    act(() => {
      carouselElement.props.onSnapToItem(1);
    });

    expect(handleChangeEvent).toHaveBeenCalledWith(1);
  });
});
