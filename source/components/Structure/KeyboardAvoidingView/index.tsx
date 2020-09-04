import styled from 'styled-components/native';
import { Platform } from 'react-native';

const KeyboardAvoingView = styled.KeyboardAvoidingView.attrs(() => ({
  enabled: true,
  behavior: Platform.OS === 'ios' ? 'padding' : 'none',
  keyboardVerticalOffset: 0,
}))`
  flex: 1;
`;

export default KeyboardAvoingView;
