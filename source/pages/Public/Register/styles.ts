import styled from 'styled-components/native';
import AnimatedInput from 'react-native-animated-input';

import { Typography } from '~/components';
import { TypographyType } from '~/components/UI/Typography';
import { ThemeContextType, Metrics } from '~/theme';

export const ButtonsContainer = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    // flex: 0.5,
    flexGrow: 0.01,
    width: Metrics.screen.width,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
}))`
  background-color: ${({ theme }: ThemeContextType): string => theme.monochromatic.almostWhite};
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  padding-bottom: 30px;
`;

export const TitleContainer = styled.View`
  align-items: flex-start;
  width: 90%;
  margin-top: 36px;
`;

export const Title = styled(Typography).attrs(() => ({
  type: TypographyType.H2,
}))`
  color: ${({ theme }: ThemeContextType): string => theme.primary.purple};
`;

export const InputsContainer = styled.View`
  padding-bottom: 30px;
`;

export const Input = styled(AnimatedInput).attrs(({ theme }) => ({
  styleLabel: {
    color: theme.monochromatic.lightGrey,
  },
  styleBodyContent: {
    borderBottomColor: theme.monochromatic.lightGrey,
  },
  styleInput: {
    color: theme.monochromatic.lightGrey,
  },
}))`
  padding: 12px 0;
`;

export const ForgotPasswordContainer = styled.View`
  align-items: flex-start;
  align-self: flex-start;
  padding-left: 20px;
  padding-top: 5px;
`;

export const ForgotPassword = styled(Typography).attrs(() => ({
  type: TypographyType.P2,
}))`
  color: ${({ theme }: ThemeContextType): string => theme.primary.blue};
`;

export const LineSeparatorContainer = styled.View`
  margin-top: 20px;
  margin-bottom: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const LineSeparator = styled.View`
  width: 40%;
  margin: 8px;
  border-color: ${({ theme }: ThemeContextType): string => theme.monochromatic.midGrey};
  border-width: 1px;
`;

export const TextSeparator = styled(Typography).attrs(() => ({
  type: TypographyType.P2,
}))`
  color: ${({ theme }: ThemeContextType): string => theme.monochromatic.midGrey};
`;
