import React, { useContext } from 'react';
import { DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { useNavigation, CommonActions } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

import IonIcon from 'react-native-vector-icons/Ionicons';
import { Colors } from '~/theme';
import { UserContext } from '~/services/store/reducers';

import { Container, HeaderContainer, UserAvatar, UserName, UserNameFirstLetter, UserNameAvatar } from './styles';

export default function DrawerContent(props): JSX.Element {
  const { t } = useTranslation();
  const { dispatch } = useNavigation();

  const { userState } = useContext(UserContext);
  const user = userState.data;

  const firstLetter = user?.name?.charAt(0);

  function handleLogout(): void {
    dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'Auth' }],
      })
    );
  }

  return (
    <Container>
      <HeaderContainer>
        {user.image ? (
          <UserAvatar source={{ uri: user.image }} />
        ) : (
          <UserNameAvatar>
            <UserNameFirstLetter>{firstLetter}</UserNameFirstLetter>
          </UserNameAvatar>
        )}
        <UserName>{user.name}</UserName>
      </HeaderContainer>
      <DrawerItemList
        {...props}
        activeBackgroundColor={Colors.theme.primary.purple}
        inactiveTintColor={Colors.theme.primary.purple}
        activeTintColor={Colors.theme.primary.blue}
        labelStyle={{ fontSize: 15, marginLeft: -10 }}
        itemStyle={{ width: '100%', marginLeft: 0, borderRadius: 0, paddingLeft: 10, height: 50, marginTop: 0 }}
      />
      <DrawerItem
        icon={({ focused, size }): JSX.Element => (
          <IonIcon color={Colors.theme.primary.red} size={size} name={focused ? 'exit' : 'exit-outline'} />
        )}
        label={t('logout')}
        labelStyle={{ color: Colors.theme.primary.red, marginLeft: -10 }}
        onPress={handleLogout}
      />
    </Container>
  );
}
