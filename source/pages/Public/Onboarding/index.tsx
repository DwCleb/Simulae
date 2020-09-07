import React, { useState } from 'react';
// import SplashScreen from 'react-native-splash-screen';

import { useNavigation, CommonActions } from '@react-navigation/native';
import { Container, LogoContainer } from './styles';
import { Auth } from '~/services/requests';

import { useFormik } from 'formik';

import * as yup from 'yup';

import { Logo } from '~/assets';

import { Login, Register } from '~/pages/Public';

export default function Onboarding(): JSX.Element {
  const navigation = useNavigation();

  const { navigate } = CommonActions;

  const { dispatch } = navigation;
  const { signIn, signUp } = Auth();

  const [registerPageActive, setRegisterPageActive] = useState(false);
  const [loading, setLoading] = useState(false);

  function onSubmitLogin(): void {
    dispatch(
      navigate({
        name: 'App',
      })
    );
    // setLoading(true);
    // await signIn(formValues.email, formValues.password);
    // setLoading(false);
  }

  const formikLogin = useFormik({
    initialValues: { email: '', password: '' },
    onSubmitLogin,
    validationSchema: yup.object().shape({
      email: yup.string().required('O E-mail é obrigatório'),
      password: yup.string().required('A Senha é obrigatória'),
    }),
  });

  const handleInputLoginFormChange = ({ value, name }): void => {
    formikLogin.setFieldValue(name, value);
  };

  async function onSubmitRegister(formValues): Promise<void> {
    if (formValues.password === formValues.confirmPassword) {
      await signUp(formValues);
    } else {
      // Toast.show('Password does not match with confirmation password', Toast.LONG);
    }
  }

  const formikRegister = useFormik({
    initialValues: { email: '', password: '' },
    onSubmitRegister,
    validationSchema: yup.object().shape({
      name: yup.string().required('O Nome é obrigatório'),
      email: yup.string().required('O E-mail é obrigatório'),
      password: yup.string().required('A Senha é obrigatória'),
      confirmPassword: yup.string().required('A Confirmação de Senha é obrigatória'),
    }),
  });

  const handleInputRegisterFormChange = ({ value, name }): void => {
    formikRegister.setFieldValue(name, value);
  };

  return (
    <Container>
      <LogoContainer>
        <Logo width={250} />
      </LogoContainer>
      {registerPageActive ? (
        <Register
          form={formikRegister}
          onLogin={(): void => setRegisterPageActive(false)}
          handleInputRegisterFormChange={handleInputRegisterFormChange}
        />
      ) : (
        <Login
          form={formikLogin}
          onRegister={(): void => setRegisterPageActive(true)}
          handleInputLoginFormChange={handleInputLoginFormChange}
          onSubmit={onSubmitLogin}
        />
      )}
    </Container>
  );
}
