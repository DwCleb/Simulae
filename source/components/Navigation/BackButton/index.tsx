import React from 'react';

import { Button } from './styles';

import { BackIcon } from '~/assets';

// interface props of backButton
interface Props {
  action: () => void;
}

export default function BackButton({ action }: Props): JSX.Element {
  return (
    <Button onPress={action} hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}>
      <BackIcon height={16} width={16} />
    </Button>
  );
}
