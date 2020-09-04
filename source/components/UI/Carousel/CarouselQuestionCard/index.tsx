import React from 'react';
import { Platform } from 'react-native';

import { Typography } from '~/components';
import { TypographyType } from '~/components/UI/Typography';

import { Container, TitleContainer, IllustrationContainer, DescriptionContainer, CarouselImage } from './styles';

export interface CarouselItemProps {
  item: { name: string; checkIn: string; image: JSX.Element; overlap: boolean; cardIndex: number };
}

const overlapTitleStyle = { zIndex: 999, marginTop: Platform.select({ android: -30, ios: -60 }) };
const overlapImageWidth = Platform.select<string | number>({ android: '135%', ios: 430 });
const overlapImageHeight = Platform.select<string | number>({ android: '135%', ios: 400 });

export default function CarouselQuestionCard({ item, cardIndex }: CarouselItemProps): JSX.Element {
  const { name, checkIn, image, overlap } = item;

  return (
    <Container cardIndex={cardIndex}>
      <TitleContainer>
        <Typography type={TypographyType.H2} distance={[20, 0, 0, 0]}>
          {name}
        </Typography>
      </TitleContainer>
      <IllustrationContainer>
        <CarouselImage
          source={image}
          width={overlap ? overlapImageWidth : '100%'}
          height={overlap ? overlapImageHeight : '100%'}
          style={overlap ? overlapTitleStyle : {}}
        />
      </IllustrationContainer>

      <DescriptionContainer>
        <Typography type={TypographyType.L2} distance={[0, 0, 0, 0]}>
          {checkIn}
        </Typography>
      </DescriptionContainer>
    </Container>
  );
}
