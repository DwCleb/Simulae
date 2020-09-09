import React, { useState, useContext } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import ImagePicker from 'react-native-image-picker';

import { User } from '~/services/requests';
import {
  Container,
  AvatarInput,
  Avatar,
  InputsContainer,
  LineSeparatorContainer,
  LineSeparator,
  TextSeparator,
  ButtonsContainer,
} from './styles';

import { useTranslation } from 'react-i18next';
import Toast from 'react-native-simple-toast';
import { Button, ExpandedHeader, Input } from '~/components';

import { UserContext } from '~/services/store/reducers';
import { useFormik } from 'formik';

import * as yup from 'yup';

export default function Profile(): JSX.Element {
  const { t } = useTranslation();
  // context
  const { updateUser } = User();
  const { userState } = useContext(UserContext);
  const user = userState.data;

  // state
  const [imageFileUri, setImageFileUri] = useState<string>();

  async function onSubmit(formValues): Promise<void> {
    if (formValues.password === formValues.confirmPassword) {
      await updateUser(formValues);
    } else {
      Toast.show('Password does not match with confirmation password', Toast.LONG);
    }
  }

  const formik = useFormik({
    initialValues: {
      name: user.name,
      email: user.email,
      oldPassword: undefined,
      newPassword: undefined,
      password: undefined,
      confirmPassword: undefined,
    },
    onSubmit,
    validationSchema: yup.object().shape({
      name: yup.string().required('O Nome é obrigatório'),
      email: yup.string().required('O E-mail é obrigatório'),
      oldPassword: yup.string(),
      password: yup.string(),
      confirmPassword: yup.string(),
    }),
  });

  const handleInputFormChange = ({ value, name }): void => {
    formik.setFieldValue(name, value);
  };

  function handleProfilePicture(): void {
    const options = {
      title: t('selectImage'),
      customButtons: [{ name: 'customOptionKey', title: 'Choose Photo from Custom Option' }],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response.uri);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        setImageFileUri(response.uri);
      }
    });
  }

  function renderFileData(): JSX.Element {
    if (imageFileUri) {
      return (
        <AvatarInput onPress={handleProfilePicture}>
          <Avatar source={{ uri: imageFileUri }} />
        </AvatarInput>
      );
    }

    return (
      <AvatarInput onPress={handleProfilePicture}>
        <Icon name="camera" size={30} color="#BDBDBD" />
      </AvatarInput>
    );
  }

  return (
    <Container>
      <ExpandedHeader title={t('profile')} />
      {/* {renderFileData()} */}
      <InputsContainer>
        <Input dark name="name" value={formik.values.name} onChange={handleInputFormChange} label={t('name')} />
        <Input
          name="email"
          dark
          value={formik.values.email}
          onChange={handleInputFormChange}
          keyboardType="email-address"
          label={t('email')}
        />
      </InputsContainer>
      <LineSeparatorContainer>
        <LineSeparator />
        <TextSeparator>{t('changePassword').toUpperCase()}</TextSeparator>
        <LineSeparator />
      </LineSeparatorContainer>
      <InputsContainer>
        <Input
          name="oldPassword"
          dark
          value={formik.values.password}
          onChange={handleInputFormChange}
          secureTextEntry
          label={t('currentPassword')}
        />
        <Input
          name="password"
          dark
          value={formik.values.password}
          onChange={handleInputFormChange}
          secureTextEntry
          label={t('newPassword')}
        />
        <Input
          name="confirmPassword"
          dark
          value={formik.values.confirmPassword}
          onChange={handleInputFormChange}
          secureTextEntry
          label={t('confirmPassword')}
        />
      </InputsContainer>
      <ButtonsContainer>
        <Button title={t('save')} accessibilityLabel="Tap to save profile info" onPress={formik.handleSubmit} />
      </ButtonsContainer>
    </Container>
  );
}
