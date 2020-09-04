import styled from 'styled-components/native';
import Modal from 'react-native-modal';
import { ThemeContextType } from '~/theme';

export const Container = styled(Modal)`
  flex: 1;
  justify-content: flex-end;
  margin: 0;
  background-color: transparent;
`;

export const Content = styled.View`
  width: 100%;
  background-color: white;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`;

export const ModalRod = styled.View`
  align-self: center;
  height: 5px;
  width: 15%;
  background-color: ${({ theme }: ThemeContextType): string => theme.primary.blue};
  margin-top: 6px;
  margin-bottom: 32px;
  border-radius: 12px;
`;
