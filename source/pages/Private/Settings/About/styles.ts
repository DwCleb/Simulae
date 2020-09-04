import styled from 'styled-components/native';

import { Typography } from '~/components';
import { TypographyType } from '~/components/UI/Typography';
import { ThemeContextType } from '~/theme';

export const Container = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  showsVerticalScrollIndicator: false,
  keyboardShouldPersistTaps: 'handled',
  showsHorizonalScrollIndicator: false,
}))`
  background-color: ${({ theme }: ThemeContextType): string => theme.primary.purple};
`;

export const LogoContainer = styled.View``;

export const Text = styled(Typography).attrs(() => ({
  type: TypographyType.L1,
}))`
  color: ${({ theme }: ThemeContextType): string => theme.monochromatic.lightGrey};
`;
