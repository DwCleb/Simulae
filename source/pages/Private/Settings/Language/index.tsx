import React from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from '~/components';
import { Container } from './styles';

export default function Language({ onSelect, selected }): JSX.Element {
  const { t } = useTranslation();

  const languages = [
    { id: 'pt', name: t('portuguese') },
    { id: 'en', name: t('english') },
    { id: 'es', name: t('spanish') },
  ];

  return (
    <Container>
      {languages.map((language) => (
        <Button
          key={language.id}
          title={language.name}
          variant={selected === language.id ? 'primary' : 'primaryOutlined'}
          onPress={(): Promise => onSelect(language.id)}
        />
      ))}
    </Container>
  );
}
