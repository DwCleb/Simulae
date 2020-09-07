import React from 'react';
// import SplashScreen from 'react-native-splash-screen';

import { Carousel, CarouselQuestionCard, Stepper } from '~/components';
import { Container, CarouselContainer } from './styles';
import { DefaultTestImage } from '~/assets';

const MOCK_DATA = [
  {
    question: 'Determine o 20º elemento e a soma dos termos da seguinte progressão aritmética: (2, 7, 12, 17,...).',
    image: DefaultTestImage,
    alternatives: [
      {
        id: 'asidnajs',
        text: 'O 20º termo da PA é igual a 97 e a soma dos termos equivale a 990.',
      },
      { id: 'asidnass', text: 'O 20º termo da PA é igual a 87 e a soma dos termos equivale a 1004.' },
      { id: 'xasxas', text: 'O 20º termo da PA é igual a 70 e a soma dos termos equivale a 900.' },
      { id: 'asidasxjs', text: 'O 20º termo da PA é igual a 104 e a soma dos termos equivale a 1024.' },
      { id: 'xasasx', text: 'Nenhuma das alternativas anteriores.' },
    ],
  },
  {
    question: 'Determine quantos múltiplos de 9 há entre 100 e 1 000.',
    image: DefaultTestImage,
    alternatives: [
      {
        id: 'asidffs',
        text: 'Entre os números 100 e 1000 existem 55 múltiplos de 9.',
      },
      { id: 'asddffe', text: 'Entre os números 100 e 1000 existem 105 múltiplos de 9.' },
      { id: 'xadfdf', text: 'Entre os números 100 e 1000 existem 100 múltiplos de 9.' },
      { id: 'asiwewe', text: 'Entre os números 100 e 1000 existem 80 múltiplos de 9.' },
      { id: 'xaqwwww', text: 'Nenhuma das alternativas anteriores.' },
    ],
  },
  {
    question:
      'Ao financiar uma casa no total de 20 anos, Carlos fechou o seguinte contrato com a financeira: para cada ano, o valor das 12 prestações deve ser igual e o valor da prestação mensal em um determinado ano é R$ 50,00 a mais que o valor pago, mensalmente, no ano anterior. Considerando que o valor da prestação no primeiro ano é de R$ 150,00, determine o valor da prestação no último ano. ',
    alternatives: [
      {
        id: 'asidffs',
        text: 'O valor da prestação no último ano será de R$ 1 250,00.',
      },
      { id: 'asddffe', text: 'O valor da prestação no último ano será de R$ 900,00.' },
      { id: 'xadfdf', text: 'O valor da prestação no último ano será de R$ 1 150,00.' },
      { id: 'asiwewe', text: 'O valor da prestação no último ano será de R$ 1 100,00.' },
      { id: 'xaqwwww', text: 'O valor da prestação no último ano será de R$ 1 110,00.' },
    ],
  },
];

export default function Dashboard(): JSX.Element {
  return (
    <Container>
      <CarouselContainer>
        <Carousel CarouselItem={CarouselQuestionCard} Pagination={Stepper} data={MOCK_DATA} />
      </CarouselContainer>
    </Container>
  );
}
