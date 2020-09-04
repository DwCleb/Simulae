import React from 'react';

import { Container, Title, Value, RightArrow } from './styles';

interface SectionButtonProps {
  title: string;
  value?: string;
  onPress?: () => void;
}

export default function SectionButton({ title, value, onPress }: SectionButtonProps): JSX.Element {
  return (
    <Container onPress={onPress}>
      <Title>{title}</Title>
      <Value>{value}</Value>
      <RightArrow />
    </Container>
  );
}
