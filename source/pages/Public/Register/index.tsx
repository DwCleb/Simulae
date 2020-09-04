import React, { useState } from 'react';

import { Button, Input } from '~/components';

import { ButtonsContainer, TitleContainer, Title, InputsContainer } from './styles';

export default function Register({ onLogin, handleInputRegisterFormChange, form }): JSX.Element {
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   if (Platform.OS === 'android') SplashScreen.hide();
  // });

  return (
    <ButtonsContainer>
      <TitleContainer>
        <Title>Cadastro</Title>
      </TitleContainer>
      <InputsContainer>
        <Input dark name="name" value={form.values.name} onChange={handleInputRegisterFormChange} label="Nome" />
        <Input
          dark
          name="email"
          value={form.values.email}
          onChange={handleInputRegisterFormChange}
          keyboardType="email-address"
          label="E-mail"
        />
        <Input
          dark
          name="password"
          value={form.values.password}
          onChange={handleInputRegisterFormChange}
          secureTextEntry
          label="Senha"
        />
        <Input
          dark
          name="confirmPassword"
          value={form.values.confirmPassword}
          onChange={handleInputRegisterFormChange}
          secureTextEntry
          label="Confirmar senha"
        />
      </InputsContainer>
      <Button isLoading={loading} title="Cadastrar" variant="primary" onPress={form.handleSubmit} />
      <Button isLoading={loading} title="Já tenho conta" variant="secondaryOutlined" onPress={onLogin} />
    </ButtonsContainer>
  );
}
