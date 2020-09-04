import styled from 'styled-components/native';
import AnimatedInput from 'react-native-animated-input';

import { Metrics, ThemeContextType } from '~/theme';
import { Typography } from '~/components';
import { TypographyType } from '~/components/UI/Typography';

export const Container = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    alignItems: 'center',
  },
  showsVerticalScrollIndicator: false,
}))`
  flex: 1;
  background-color: ${({ theme }: ThemeContextType): string => theme.monochromatic.lightGrey};
`;

export const AvatarInput = styled.TouchableOpacity`
  width: ${Metrics.screen.width * 0.3};
  height: ${Metrics.screen.width * 0.3};
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  border-radius: 64px;
  background-color: ${({ theme }: ThemeContextType): string => theme.monochromatic.white};
`;

export const Avatar = styled.Image`
  width: ${Metrics.screen.width * 0.3};
  height: ${Metrics.screen.width * 0.3};
  border-radius: 64px;
  background-color: ${({ theme }: ThemeContextType): string => theme.monochromatic.white};
`;

export const InputsContainer = styled.View`
  align-items: center;
  margin-top: 8px;
  width: 100%;
`;

export const Input = styled(AnimatedInput).attrs(({ theme }) => ({
  styleLabel: {
    color: theme.monochromatic.darkGrey,
  },
  styleBodyContent: {
    width: Metrics.screen.width - 40,
    borderBottomColor: theme.monochromatic.black,
  },
  styleInput: {
    color: theme.monochromatic.black,
  },
}))`
  padding: 12px 0;
`;

export const LineSeparatorContainer = styled.View`
  width: 70%;
  margin-top: 32px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const LineSeparator = styled.View`
  width: 40%;
  margin: 8px;
  border-color: ${({ theme }: ThemeContextType): string => theme.primary.blue};
  border-width: 1px;
`;

export const TextSeparator = styled(Typography).attrs(() => ({
  type: TypographyType.P2,
}))`
  color: ${({ theme }: ThemeContextType): string => theme.monochromatic.midGrey};
`;

export const ButtonsContainer = styled.View`
  padding-vertical: 20px;
`;
