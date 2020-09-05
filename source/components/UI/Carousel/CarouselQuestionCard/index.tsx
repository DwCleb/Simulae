import React from 'react';
import { Platform } from 'react-native';

import { Typography } from '~/components';
import { TypographyType } from '~/components/UI/Typography';

import { Container, TitleContainer, IllustrationContainer, DescriptionContainer, CarouselImage } from './styles';

export interface CarouselItemProps {
  item: { name: string; checkIn: string; image: JSX.Element; overlap: boolean; cardIndex: number };
}

export default function CarouselQuestionCard({ item, cardIndex }: CarouselItemProps): JSX.Element {
  const { name, checkIn } = item;

  return (
    <Container cardIndex={cardIndex}>
      <TitleContainer>
        <Typography type={TypographyType.P1} distance={[0, 0, 0, 0]} align="left">
          {name}
        </Typography>
      </TitleContainer>

      <DescriptionContainer>
        <Typography type={TypographyType.L2} distance={[0, 0, 0, 0]}>
          {checkIn}
        </Typography>
      </DescriptionContainer>
    </Container>
  );
}
