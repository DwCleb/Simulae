import React from 'react';

import { Typography } from '~/components';
import { TypographyType } from '~/components/UI/Typography';

import { Container, TitleContainer } from './styles';

export interface CardListProps {
  item: { title: string };
  isFirstItemIndex: boolean;
}

export default function CardList({ item }: CardListProps, isFirstItemIndex): JSX.Element {
  const { title } = item;

  return (
    <Container isFirstItemIndex={isFirstItemIndex}>
      <TitleContainer>
        <Typography type={TypographyType.P1} distance={[0, 0, 0, 0]} align="justify">
          {title}
        </Typography>
      </TitleContainer>
    </Container>
  );
}
