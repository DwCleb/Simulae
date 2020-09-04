import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { MenuIcon, Button } from './styles';

export default function MenuButton({ color, size }) {
  const navigation = useNavigation();
  return (
    <Button onPress={() => navigation.toggleDrawer()}>
      <MenuIcon color={color} size={size} />
    </Button>
  );
}

MenuButton.defaultProps = {
  color: '',
  size: 30,
};
