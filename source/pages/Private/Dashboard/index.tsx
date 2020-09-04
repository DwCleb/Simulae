import React from 'react';
import { useTranslation } from 'react-i18next';
// import SplashScreen from 'react-native-splash-screen';

import { ExpandedHeader, Carousel, CarouselQuestionCard, Stepper } from '~/components';
import { Container, CarouselContainer } from './styles';
import { CleberAvatar } from '~/assets';

const MOCK_DATA = [
  {
    name: 'Cléber Júnior',
    image: CleberAvatar,
    checkIn: '26/10/2019',
  },
  {
    name: 'Cléber Júnior',
    image: CleberAvatar,
    checkIn: '26/10/2019',
  },
];

export default function Dashboard(): JSX.Element {
  const { t } = useTranslation();

  return (
    <Container>
      <ExpandedHeader title="Olá Cléber" subtitle="Seja bem vindo!" />
      <CarouselContainer>
        <Carousel CarouselItem={CarouselQuestionCard} Pagination={Stepper} data={MOCK_DATA} />
      </CarouselContainer>
    </Container>
  );
}
