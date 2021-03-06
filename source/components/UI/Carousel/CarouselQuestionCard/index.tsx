import React from 'react';

import { Typography } from '~/components';
import { TypographyType } from '~/components/UI/Typography';

import { Container, TitleContainer, IllustrationContainer, AlternativeContainer, CarouselImage } from './styles';

export interface CarouselItemProps {
  item: { question: string; checkIn: string; image: JSX.Element; overlap: boolean; cardIndex: number };
}

const alternativesIndex = ['A)', 'B)', 'C)', 'D)', 'E)'];
export default function CarouselQuestionCard({ item, cardIndex }: CarouselItemProps): JSX.Element {
  const { question, alternatives, image } = item;

  return (
    <Container cardIndex={cardIndex}>
      <TitleContainer>
        <Typography type={TypographyType.P1} distance={[0, 0, 0, 0]} align="justify">
          {question}
        </Typography>
      </TitleContainer>

      {image && (
        <IllustrationContainer>
          <CarouselImage source={image} />
        </IllustrationContainer>
      )}

      {alternatives?.map((alternative, index) => (
        <AlternativeContainer>
          <Typography key={alternative.id} type={TypographyType.P1} distance={[0, 0, 0, 0]} align="justify">
            {`${alternativesIndex[index]} ${alternative.text}`}
          </Typography>
        </AlternativeContainer>
      ))}
    </Container>
  );
}
