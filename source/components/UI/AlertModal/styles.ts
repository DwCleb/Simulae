import styled from 'styled-components/native';
import Modal from 'react-native-modal';
import { ThemeContextType } from '~/theme';
import { Typography } from '~/components';
import { TypographyType } from '~/components/UI/Typography';

export const Container = styled(Modal)`
  flex: 1;
  justify-content: center;
  margin: 20px;
  background-color: transparent;
  padding: 10px;
`;

export const Content = styled.View`
  width: 100%;
  background-color: white;
  border-radius: 15px;
`;

export const Title = styled(Typography).attrs(() => ({
  type: TypographyType.H3,
}))`
  padding: 20px;
  color: ${({ theme }: ThemeContextType): string => theme.monochromatic.black};
`;

export const Message = styled(Typography).attrs(() => ({
  type: TypographyType.P2,
}))`
  padding-bottom: 20px;
  color: ${({ theme }: ThemeContextType): string => theme.monochromatic.darkGrey};
`;

export const Button = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.6,
}))`
  padding: 15px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  background-color: ${({ theme }: ThemeContextType): string => theme.alerts.green};
`;

export const ButtonText = styled(Typography).attrs(() => ({
  type: TypographyType.P1,
  bold: true,
}))`
  color: ${({ theme }: ThemeContextType): string => theme.monochromatic.black};
`;
