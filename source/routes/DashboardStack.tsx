import React from 'react';
import { Platform } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useTranslation } from 'react-i18next';

import { createStackNavigator } from '@react-navigation/stack';

import { DrawerContent, MenuButton } from '~/components';

import { Colors } from '~/theme';
import { Logo } from '~/assets';

import { Dashboard, Profile, Settings } from '~/pages/Private';

import IonIcon from 'react-native-vector-icons/Ionicons';
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const headerOptions = {
  headerStyle: {
    backgroundColor: Colors.theme.primary.purple,
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,
    height: Platform.OS === 'ios' ? 60 : 50,
  },
  headerTitle: (): JSX.Element => <Logo width={110} style={Platform.OS === 'ios' ? { marginTop: -30 } : {}} />,
  headerLeft: (): JSX.Element => <MenuButton color={Colors.theme.monochromatic.altGrey} />,
};

function DashboardStack(): JSX.Element {
  return (
    <Stack.Navigator initialRouteName="Dashboard">
      <Stack.Screen name="Dashboard" component={Dashboard} options={headerOptions} />
    </Stack.Navigator>
  );
}

function ProfileStack(): JSX.Element {
  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen name="Profile" component={Profile} options={headerOptions} />
    </Stack.Navigator>
  );
}

function SettingsStack(): JSX.Element {
  return (
    <Stack.Navigator initialRouteName="Settings">
      <Stack.Screen name="Settings" component={Settings} options={headerOptions} />
    </Stack.Navigator>
  );
}

const DrawerNavigator = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Drawer.Navigator drawerType="front" drawerContent={(props): JSX.Element => <DrawerContent {...props} />}>
      <Drawer.Screen
        name="Dashboard"
        component={DashboardStack}
        options={{
          drawerLabel: t('home'),
          drawerIcon: ({ focused }): JSX.Element => (
            <IonIcon
              size={25}
              name={`home${focused ? '' : '-outline'}`}
              color={focused ? Colors.theme.primary.blue : Colors.theme.monochromatic.darkGrey}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          drawerLabel: t('profile'),
          drawerIcon: ({ focused }): JSX.Element => (
            <IonIcon
              size={25}
              name={`person${focused ? '' : '-outline'}`}
              color={focused ? Colors.theme.primary.blue : Colors.theme.monochromatic.darkGrey}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingsStack}
        options={{
          drawerLabel: t('settings'),
          drawerIcon: ({ focused }): JSX.Element => (
            <IonIcon
              size={25}
              name={`settings${focused ? '' : '-outline'}`}
              color={focused ? Colors.theme.primary.blue : Colors.theme.monochromatic.darkGrey}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
