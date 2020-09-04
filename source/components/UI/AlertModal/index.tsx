import React from 'react';

import { Container, Content, Title, Message, Button, ButtonText } from './styles';

interface AlertModalProps {
  onClose: (status) => void;
  modalVisible: boolean;
  title: string;
  message: string;
}

function AlertModal({ onClose, modalVisible, title, message }: AlertModalProps): JSX.Element {
  return (
    <Container isVisible={modalVisible} swipeDirection="down" onBackdropPress={(): void => onClose(!modalVisible)}>
      <Content>
        <Title>{title}</Title>
        <Message>{message}</Message>
        <Button onPress={(): void => onClose(!modalVisible)}>
          <ButtonText>Okay</ButtonText>
        </Button>
      </Content>
    </Container>
  );
}

export default AlertModal;
