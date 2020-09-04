import React from 'react';
import { create } from 'react-test-renderer';

import { BackButton } from '~/components';

import { ThemeProvider } from 'styled-components/native';
import darkTheme from '~/theme/ThemeContext/dark';

let wrapper = {};

const props = {};

const { theme } = darkTheme;

const action = jest.fn();

describe('<BackButton />', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  beforeEach(() => {
    wrapper = create(
      <ThemeProvider theme={theme}>
        <BackButton action={(): object => action} {...props} />
      </ThemeProvider>
    );
    return wrapper;
  });
  it('Should be render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
