import { ThemeType } from '~/theme';

export const Colors: { theme: ThemeType } = {
  theme: {
    input: {
      label: '#0A003D',
      background: 'transparent',
      text: { default: '#FFFFFF', valid: '#00C389', invalid: '#FF0000' },
      border: {
        empty: '#FFFFFF4D',
        typing: '#FFFFFF80',
        complete: '#0BC08B80',
        error: '#FF0000',
      },
      placeholder: '#FFFFFF99',
      icon: { default: '#DFE1DF', valid: '#0BC08B' },
    },
    button: {
      background: {
        primary: { active: '#0A003D', disabled: '#FFFFFF4D' },
        primaryOutlined: { active: 'transparent', disabled: '#FFFFFF4D' },
        secondary: { active: '#38CFEE', disabled: '#FFFFFF4D' },
        secondaryOutlined: { active: 'transparent', disabled: '#FFFFFF4D' },
      },
      title: {
        primary: { active: '#38CFEE', disabled: '#FFFFFF4D' },
        primaryOutlined: { active: '#38CFEE', disabled: '#FFFFFF4D' },
        secondary: { active: '#0A003D', disabled: '#FFFFFF4D' },
        secondaryOutlined: { active: '#0A003D', disabled: '#FFFFFF4D' },
      },
      border: {
        primary: { active: 'transparent', disabled: 'transparent' },
        primaryOutlined: { active: '#0A003D', disabled: '#FFFFFF4D' },
        secondary: { active: '#38CFEE', disabled: 'transparent' },
        secondaryOutlined: { active: '#38CFEE', disabled: '#FFFFFF4D' },
      },
    },
    primary: {
      blue: '#38CFEE',
      red: '#F15A53',
      orange: '#FDA240',
      purple: '#0A003D',
    },
    alerts: {
      green: '#6FCF97',
      red: '#FD2929',
      yellow: '#F2C94C',
    },
    monochromatic: {
      black: '#252525',
      darkGrey: '#4F4F4F',
      midGrey: '#828282',
      altGrey: '#BDBDBD',
      lightGrey: '#E0E0E0',
      almostWhite: '#FDFDFD',
      white: '#FFF',
    },
    transparent: 'transparent',
    barStyle: 'dark-content',
    background: {
      light: {
        primary: '#FFFFFF',
        secondary: '#EFEFF4',
        tertiary: '#FFFFFF',
      },
      base: {
        primary: '#000000',
        secondary: '#1C1C1E',
        tertiary: '#2C2C2E',
      },
      elevated: {
        primary: '#1C1C1E',
        secondary: '#2C2C2E',
        tertiary: '#3A3A3C',
      },
    },
  },
};
