import React from 'react';
import { useTranslation } from 'react-i18next';
import { Logo } from '~/assets';
import { Container, LogoContainer, Text } from './styles';

export default function About(): JSX.Element {
  const { t } = useTranslation();

  return (
    <Container>
      <LogoContainer>
        <Logo height={200} width={200} />
      </LogoContainer>
      <Text>Cleber Júnior</Text>
      <Text>Gabriel Ecker</Text>
      <Text>--------------</Text>
      <Text>{t('version')}: 1.0.0</Text>
    </Container>
  );
}
