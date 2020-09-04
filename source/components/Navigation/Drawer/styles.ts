import styled from 'styled-components/native';
import { Typography } from '~/components';
import { TypographyType } from '~/components/UI/Typography';
import { ThemeContextType } from '~/theme';

export const Container = styled.View`
  flex: 1;
  /* height: 100%; */
  justify-content: flex-start;
`;

export const HeaderContainer = styled.View`
  background-color: ${({ theme }: ThemeContextType): string => theme.primary.purple};
  justify-content: center;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 30px;
`;

export const UserAvatar = styled.Image.attrs(() => ({
  resizeMode: 'cover',
}))`
  border-radius: 80px;
  align-self: center;
  width: 100px;
  height: 100px;
`;

export const UserNameAvatar = styled.View`
  border-radius: 80px;
  align-self: center;
  width: 100px;
  height: 100px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }: ThemeContextType): string => theme.monochromatic.lightGrey};
`;

export const UserNameFirstLetter = styled(Typography).attrs(() => ({
  type: TypographyType.H1,
  size: 50,
  lineHeight: 50,
  bold: true,
}))`
  padding-top: 10px;
  color: ${({ theme }: ThemeContextType): string => theme.primary.purple};
`;

export const UserName = styled(Typography).attrs(() => ({
  type: TypographyType.H3,
  bold: true,
}))`
  margin-top: 15px;
  color: ${({ theme }: ThemeContextType): string => theme.monochromatic.white};
`;

export const HouseName = styled(Typography).attrs(() => ({
  type: TypographyType.P1,
}))`
  margin-top: 5px;
  color: ${({ theme }: ThemeContextType): string => theme.primary.blue};
`;
