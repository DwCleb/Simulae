import React from 'react';
import { create } from 'react-test-renderer';

import { KeyboardAvoidingView } from '~/components';
import { ThemeProvider } from 'styled-components/native';
import darkTheme from '~/theme/ThemeContext/dark';

let wrapper = {};
const { theme } = darkTheme;

describe('<KeyboardAvoidingView />', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  beforeEach(() => {
    wrapper = create(
      <ThemeProvider theme={theme}>
        <KeyboardAvoidingView />
      </ThemeProvider>
    );
    return wrapper;
  });

  it('Should be render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
