import React from 'react';

import { BackButton } from '~/components/Navigation';
import { Container, BackButtonContainer, TextContainer, Title, Subtitle } from './styles';

interface ExpandedHeaderProps {
  title: string;
  subtitle?: string | boolean;
  activeBack?: boolean;
  actionBack?: () => void;
}
export default function ExpandedHeader({ title, subtitle, activeBack, actionBack }: ExpandedHeaderProps): JSX.Element {
  return (
    <Container>
      {activeBack && (
        <BackButtonContainer>
          <BackButton action={actionBack} />
        </BackButtonContainer>
      )}
      <TextContainer>
        <Title>{title}</Title>
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
      </TextContainer>
    </Container>
  );
}
