import styled from 'styled-components/native';

import { Typography } from '~/components';
import { TypographyType } from '~/components/UI/Typography';
import { Metrics, ThemeContextType } from '~/theme';

export const Container = styled.View`
  height: 100px;
  width: ${Metrics.screen.width};
  padding: 20px;
  justify-content: center;
  align-items: flex-start;
  flex-direction: row;
  background-color: ${({ theme }: ThemeContextType): string => theme.primary.purple};
`;

export const BackButtonContainer = styled.View`
  margin-top: 8px;
  width: 20px;
`;

export const TextContainer = styled.View`
  flex: 1;
  padding-left: 10px;
  align-items: flex-start;
`;

export const Title = styled(Typography).attrs(() => ({
  type: TypographyType.H1,
  align: 'left',
}))`
  color: ${({ theme }: ThemeContextType): string => theme.monochromatic.lightGrey};
`;

export const Subtitle = styled(Typography).attrs(() => ({
  type: TypographyType.P1,
}))`
  color: ${({ theme }: ThemeContextType): string => theme.monochromatic.lightGrey};
`;
