import React from 'react';
import { create } from 'react-test-renderer';
import { ThemeProvider } from 'styled-components/native';

import CarouselItem from '../index';
import { CarouselItemProps } from '../index';

import { Logo } from '~/assets';

import darkTheme from '~/theme/ThemeContext/dark';

let wrapper = {};

const props: CarouselItemProps = { item: { title: '', description: '', image: Logo, overlap: false } };

const theme = darkTheme.theme;

describe('<CarouselItem />', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  beforeEach(() => {
    wrapper = create(
      <ThemeProvider theme={theme}>
        <CarouselItem {...props} />
      </ThemeProvider>
    );
    return wrapper;
  });

  it('Should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
