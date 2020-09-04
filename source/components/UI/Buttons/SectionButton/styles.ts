import styled from 'styled-components/native';
import { Colors } from '~/theme';
import { Typography } from '~/components';
import { TypographyType } from '~/components/UI/Typography';
import IonIcon from 'react-native-vector-icons/Ionicons';

export const Container = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.6,
}))`
  width: 100%;
  height: 60px;
  background-color: ${Colors.theme.monochromatic.white};
  padding: 20px;
  justify-content: center;
  flex-direction: row;
`;

export const Title = styled(Typography).attrs(() => ({
  type: TypographyType.P1,
  align: 'left',
}))`
  color: ${({ theme }): string => theme.monochromatic.darkGrey};
  align-self: center;
  position: absolute;
  left: 20px;
`;

export const Value = styled(Typography).attrs(() => ({
  type: TypographyType.L1,
  align: 'right',
}))`
  align-self: center;
  position: absolute;
  right: 60px;
  color: ${({ theme }): string => theme.monochromatic.darkGrey};
`;

export const RightArrow = styled(IonIcon).attrs((props) => ({
  size: props.size || 30,
  color: Colors.theme.monochromatic.darkGrey,
  name: 'chevron-forward',
}))`
  align-self: center;
  position: absolute;
  right: 20px;
  color: ${({ theme }): string => theme.monochromatic.darkGrey};
`;
