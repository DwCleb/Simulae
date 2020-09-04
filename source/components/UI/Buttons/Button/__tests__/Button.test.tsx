import React from 'react';
import { create, ReactTestRenderer } from 'react-test-renderer';

import { Button } from '~/components';
import { Icon } from '~/components/UI/Controls/Buttons/Button/styles';
import { Props as ButtonProps } from '~/components/UI/Controls/Buttons/Button';
import { ThemeProvider } from 'styled-components/native';
import darkTheme from '~/theme/ThemeContext/dark';
import lightTheme from '~/theme/ThemeContext/light';
import { I18nManager, View } from 'react-native';
import { Metrics, scale } from '~/theme';

const onClick = jest.fn();

let wrapper: ReactTestRenderer;

let props: ButtonProps = { title: 'Test', onPress: onClick, iconDirection: 'start', variant: 'pay', small: false };

let theme = lightTheme.theme;

describe('<Button />', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  beforeEach(() => {
    wrapper = create(
      <ThemeProvider theme={theme}>
        <Button {...props} />
      </ThemeProvider>
    );
    return wrapper;
  });

  it('renders correctly in Light Theme', () => {
    props = { ...props, ...{ iconName: 'add', iconDirection: 'end' } };
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly as disable', () => {
    props = { ...props, ...{ disabled: true, iconName: 'add', iconDirection: 'end' } };
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly in RTL', () => {
    I18nManager.isRTL = true;
    props = { ...props, ...{ variant: 'pay' } };
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly in Dark Theme', () => {
    theme = darkTheme.theme;
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with icon - Direction End - Light theme', () => {
    theme = lightTheme.theme;
    props = { ...props, ...{ iconName: 'add', iconDirection: 'end' } };
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with icon - Direction End - Dark theme', () => {
    theme = darkTheme.theme;
    props = { ...props, ...{ iconName: 'add', iconDirection: 'end' } };
    expect(wrapper).toMatchSnapshot();
  });

  it('renders button with just icon - Dark theme', () => {
    theme = darkTheme.theme;
    props = { ...props, ...{ justIcon: true, iconName: 'add' } };

    const iconInst = wrapper.root.findByType(Icon);

    expect(iconInst).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
  });

  it('renders button with just icon - Light theme', () => {
    theme = lightTheme.theme;
    props = { ...props, ...{ justIcon: true, iconName: 'add' } };

    const iconInst = wrapper.root.findByType(Icon);

    expect(iconInst).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
  });

  it('Should be render with primary layout style - Dark theme', () => {
    theme = darkTheme.theme;
    props = { ...props, ...{ variant: 'primary', iconName: '' } };

    expect(wrapper).toMatchSnapshot();
  });

  it('Should be render with primary layout style - Light theme', () => {
    theme = lightTheme.theme;
    props = { ...props, ...{ variant: 'primary', iconName: 'add' } };

    expect(wrapper).toMatchSnapshot();
  });

  it('Should be render with secondary layout style - Dark theme', () => {
    theme = darkTheme.theme;
    props = { ...props, ...{ variant: 'secondary' } };

    expect(wrapper).toMatchSnapshot();
  });

  it('Should be render with secondary layout style - Light theme', () => {
    theme = lightTheme.theme;
    props = { ...props, ...{ variant: 'secondary' } };

    expect(wrapper).toMatchSnapshot();
  });

  it('Should be render with tertiary layout style - Dark theme', () => {
    theme = darkTheme.theme;
    props = { ...props, ...{ variant: 'tertiary' } };
    expect(wrapper).toMatchSnapshot();
  });

  it('Should be render with tertiary layout style - Light theme', () => {
    theme = lightTheme.theme;
    props = { ...props, ...{ variant: 'tertiary' } };
    expect(wrapper).toMatchSnapshot();
  });

  it('Should be render a Apple Pay or Google Pay button - Dark mode', () => {
    theme = darkTheme.theme;
    props = { ...props, ...{ variant: 'pay' } };

    expect(wrapper).toMatchSnapshot();
  });

  it('Should be render a Apple Pay or Google Pay button - Light mode', () => {
    theme = lightTheme.theme;
    props = { ...props, ...{ variant: 'pay' } };

    expect(wrapper).toMatchSnapshot();
  });
  it('Should be render disabled button', async () => {
    props = { ...props, ...{ disabled: true } };

    expect(wrapper).toMatchSnapshot();
  });
  it('Should be render with not exists variant with iconName', () => {
    props = { ...props, ...{ iconName: 'add', disabled: true } };

    expect(wrapper).toMatchSnapshot();
  });
  it('Should be render with not exists variant color text ', () => {
    props = { ...props, ...{ iconName: 'add' } };

    expect(wrapper).toMatchSnapshot();
  });

  // Theme Variant Prop
  it('Should be rendered a primary button with themeVariants - Light mode', () => {
    theme = lightTheme.theme;
    props = {
      ...props,
      ...{ disabled: false, themeVariants: { light: 'primary', dark: 'secondary' } },
    };
    expect(wrapper).toMatchSnapshot();
  });

  it('Should be rendered a secondary button with themeVariants - Dark mode', () => {
    theme = darkTheme.theme;
    props = {
      ...props,
      ...{ disabled: false, themeVariants: { light: 'primary', dark: 'secondary' } },
    };
    expect(wrapper).toMatchSnapshot();
  });

  // Small Prop
  it('Should be rendered a large button', () => {
    props = { ...props, ...{ small: false } };
    expect(wrapper.root.findByType(View).props.style.width).toBe(Metrics.screen.width * 0.9);
    expect(wrapper.root.findByType(View).props.style.height).toBe(scale(44));
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly as small', () => {
    props = { ...props, ...{ small: true } };
    expect(wrapper).toMatchSnapshot();
  });

  it('Should be rendered a small button', () => {
    props = { ...props, ...{ small: true } };
    expect(wrapper.root.findByType(View).props.style.width).toBe(Metrics.screen.width * 0.45);
    expect(wrapper.root.findByType(View).props.style.height).toBe(scale(38));
    expect(wrapper).toMatchSnapshot();
  });
});
