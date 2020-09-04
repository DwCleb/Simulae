import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

import { Typography } from '~/components';
import { TypographyType } from '~/components/UI/Typography';

export const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 100,
    borderRadius: 10,
    backgroundColor: '#38CFEE',
    margin: 10,
  },

  image: {
    position: 'relative',
    height: 100,
    width: 100,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    overflow: 'hidden',
  },
});

export const ItemName = styled(Typography).attrs(() => ({
  type: TypographyType.P2,
}))`
  color: ${({ theme }): string => theme.monochromatic.white};
  text-align: center;
`;

export const ItemNumber = styled(Typography).attrs(() => ({
  type: TypographyType.P2,
}))`
  color: ${({ theme }): string => theme.monochromatic.black};
  text-align: right;
  margin-right: 6px;
`;
