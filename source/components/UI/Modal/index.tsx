import React from 'react';

import { Container, Content, ModalRod } from './styles';

function Modal({ setModalVisible, modalVisible, children }): JSX.Element {
  return (
    <Container
      isVisible={modalVisible}
      avoidKeyboard={true}
      swipeDirection="down"
      swipeThreshold={60}
      onBackdropPress={() => setModalVisible(!modalVisible)}
      onSwipeComplete={() => setModalVisible(!modalVisible)}
    >
      <Content>
        <ModalRod />
        {children}
      </Content>
    </Container>
  );
}

export default Modal;
