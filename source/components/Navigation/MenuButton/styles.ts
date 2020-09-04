import { Platform } from 'react-native';
import styled from 'styled-components/native';
import IonIcon from 'react-native-vector-icons/Ionicons';

import { Metrics, Colors } from '~/theme';

export const MenuIcon = styled(IonIcon).attrs((props) => ({
  size: props.size || 30,
  color: props.color || Colors.theme.monochromatic.black,
  name: 'menu',
}))`
  flex: 1;
`;

export const Button = styled.TouchableOpacity.attrs(() => ({
  hitSlop: {
    top: 20,
    bottom: 20,
    left: 20,
    right: 20,
  },
}))`
  width: 40px;
  height: 40px;
  margin-left: ${Metrics.base.margin};
  margin-top: ${Platform.OS === 'android' ? 10 : -20}px;
`;
