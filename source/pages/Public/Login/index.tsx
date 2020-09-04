import React, { useState } from 'react';

import { Button, Input } from '~/components';

import { ButtonsContainer, TitleContainer, Title, InputsContainer } from './styles';

export default function Login({ onRegister, handleInputLoginFormChange, form, onSubmit }): JSX.Element {
  const [loading, setLoading] = useState(false);

  return (
    <ButtonsContainer>
      <TitleContainer>
        <Title>Entrar</Title>
      </TitleContainer>
      <InputsContainer>
        <Input
          dark
          name="email"
          value={form.values.email}
          onChange={handleInputLoginFormChange}
          keyboardType="email-address"
          label="E-mail"
        />
        <Input
          dark
          name="password"
          value={form.values.password}
          onChange={handleInputLoginFormChange}
          secureTextEntry
          label="Senha"
        />
      </InputsContainer>
      <Button isLoading={loading} title="Entrar" variant="primary" onPress={onSubmit} />
      <Button isLoading={loading} title="Cadastre-se" variant="secondaryOutlined" onPress={onRegister} />
    </ButtonsContainer>
  );
}
