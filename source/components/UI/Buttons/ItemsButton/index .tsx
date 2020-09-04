import React, { Component } from 'react';
import { Alert, TouchableOpacity, ImageBackground } from 'react-native';
import { IagoAvatar } from '~/assets';
import { styles, ItemName, ItemNumber } from './styles';

export default class ItemsButton extends Component {
  clicou = () => {
    Alert.alert('Teste', 'clicou');
  };

  render() {
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          this.clicou();
        }}
      >
        <ItemName>Cup</ItemName>
        <ImageBackground source={IagoAvatar} style={styles.image}>
          <ItemNumber>6</ItemNumber>
        </ImageBackground>
      </TouchableOpacity>
    );
  }
}
