import React, { useState } from 'react';

import { useTranslation } from 'react-i18next';
import { Button, Input } from '~/components';

import { ButtonsContainer, TitleContainer, Title, InputsContainer } from './styles';

export default function Register({ onLogin, handleInputRegisterFormChange, form }): JSX.Element {
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();

  // useEffect(() => {
  //   if (Platform.OS === 'android') SplashScreen.hide();
  // });

  return (
    <ButtonsContainer>
      <TitleContainer>
        <Title>{t('register')}</Title>
      </TitleContainer>
      <InputsContainer>
        <Input dark name="name" value={form.values.name} onChange={handleInputRegisterFormChange} label={t('name')} />
        <Input
          dark
          name="email"
          value={form.values.email}
          onChange={handleInputRegisterFormChange}
          keyboardType="email-address"
          label={t('email')}
        />
        <Input
          dark
          name="password"
          value={form.values.password}
          onChange={handleInputRegisterFormChange}
          secureTextEntry
          label={t('password')}
        />
        <Input
          dark
          name="confirmPassword"
          value={form.values.confirmPassword}
          onChange={handleInputRegisterFormChange}
          secureTextEntry
          label={t('confirmPassword')}
        />
      </InputsContainer>
      <Button isLoading={loading} title={t('signUp')} variant="primary" onPress={form.handleSubmit} />
      <Button isLoading={loading} title={t('alreadyHaveAccount')} variant="secondaryOutlined" onPress={onLogin} />
    </ButtonsContainer>
  );
}
