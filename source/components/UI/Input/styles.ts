import styled from 'styled-components/native';
import { TextInputMask } from 'react-native-masked-text';

import { Colors, Metrics, ThemeContextType } from '~/theme';

function margin(prop): string {
  switch (prop.length || 0 || undefined || null) {
    case 1:
      return `${prop[0]}px`;
    case 2:
      return `${prop[0]}px ${prop[1]}px`;
    case 3:
      return `${prop[0]}px ${prop[1]}px ${prop[2]}px`;
    case 4:
      return `${prop[0]}px ${prop[1]}px ${prop[2]}px ${prop[3]}px`;
    default:
      return '0px';
  }
}

export const TextInput = styled.TextInput.attrs(() => ({
  autoCorrect: false,
  autoCapitalize: 'none',
}))`
  width: ${Metrics.screen.width * 0.9};
  height: ${50}px;
  border-bottom-width: 1px;
  border-color: ${({ theme, dark }: ThemeContextType): string =>
    dark ? theme.monochromatic.black : theme.monochromatic.altGrey};
  border-radius: ${5}px;
  padding: ${23}px ${20}px ${0}px ${2}px;
  margin: ${(props): number => margin(props.distance || 0)};
  font-size: ${16}px;
  /* background-color: ${Colors.grey4}; */
  background-color: ${({ theme }: ThemeContextType): string => theme.transparent};
  color: ${({ theme, dark }: ThemeContextType): string =>
    dark ? theme.monochromatic.black : theme.monochromatic.altGrey};
  text-align: left;
`;

export const MaskedInput = styled(TextInputMask).attrs(() => ({
  autoCorrect: false,
  autoCapitalize: 'none',
}))`
  width: ${Metrics.screen.width * 0.9};
  height: ${50}px;
  border-bottom-width: ${1}px;
  border-color: ${({ theme, dark }: ThemeContextType): string =>
    dark ? theme.monochromatic.black : theme.monochromatic.altGrey};
  border-radius: ${5}px;
  padding: ${23}px ${20}px ${0}px ${2}px;
  margin: ${(props): string => margin(props.distance || '0px')};
  font-size: ${16}px;
  background-color: ${({ theme }: ThemeContextType): string => theme.transparent};
  color: ${({ theme, dark }: ThemeContextType): string =>
    dark ? theme.monochromatic.black : theme.monochromatic.altGrey};
  text-align: left;
`;
