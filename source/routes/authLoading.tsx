import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { isLogged } from '~/services/storage';

export function AuthLoading(): string {
  const [signed, setSigned] = useState('loading');

  async function _bootstrapAsync(): Promise<void> {
    const isSigned = await isLogged();
    setSigned(isSigned ? 'app' : 'auth');
  }

  useEffect(() => {
    _bootstrapAsync();
  }, []);

  return signed;
}

export function LoadingScreen(): JSX.Element {
  return <ActivityIndicator size="large" style={{ flex: 1, alignSelf: 'center' }} />;
}
