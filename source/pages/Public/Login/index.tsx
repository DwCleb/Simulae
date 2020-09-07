import React, { useState } from 'react';

import { useTranslation } from 'react-i18next';
import { Button, Input } from '~/components';

import { ButtonsContainer, TitleContainer, Title, InputsContainer } from './styles';

export default function Login({ onRegister, handleInputLoginFormChange, form, onSubmit }): JSX.Element {
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();
  return (
    <ButtonsContainer>
      <TitleContainer>
        <Title>{t('login')}</Title>
      </TitleContainer>
      <InputsContainer>
        <Input
          dark
          name="email"
          value={form.values.email}
          onChange={handleInputLoginFormChange}
          keyboardType="email-address"
          label={t('email')}
        />
        <Input
          dark
          name="password"
          value={form.values.password}
          onChange={handleInputLoginFormChange}
          secureTextEntry
          label={t('password')}
        />
      </InputsContainer>
      <Button isLoading={loading} title={t('login')} variant="primary" onPress={onSubmit} />
      <Button isLoading={loading} title={t('register')} variant="secondaryOutlined" onPress={onRegister} />
    </ButtonsContainer>
  );
}
