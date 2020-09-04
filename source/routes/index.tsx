import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';
// Pages
import { AuthLoading, LoadingScreen } from './authLoading';

// -> import Public Routes
import { Login } from '~/pages/Public';
import { Onboarding } from '~/pages/Public';
// ./

// -> import Privates Routes
import { Colors } from '~/theme';
// ./

import Register from '~/pages/Public/Register';

// Public Stack routes

import DashboardStack from './DashboardStack';

// Configuration headerStyle
export const headerStyle = {
  elevation: 0,
  shadowOpacity: 0,
  borderBottomWidth: 0,
  // // height: 50,
};
// ./

const Stack = createStackNavigator();

function AuthStack(): JSX.Element {
  return (
    <Stack.Navigator initialRouteName="Onboarding" headerMode="none">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}

function AppStack(): JSX.Element {
  return <DashboardStack />;
}

function AppNavigator(): JSX.Element {
  const isSigned = AuthLoading();
  return (
    <Stack.Navigator initialRouteName={isSigned === 'app' ? 'App' : 'Auth'} headerMode="none">
      {isSigned === 'loading' ? (
        <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
      ) : (
        <React.Fragment>
          <Stack.Screen name="App" component={AppStack} />
          <Stack.Screen name="Auth" component={AuthStack} />
        </React.Fragment>
      )}
    </Stack.Navigator>
  );
}

export default function Entry(): JSX.Element {
  const safeAreaStyle = { flex: 1, backgroundColor: Colors.theme.primary.purple, paddingTop: 0 };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={safeAreaStyle} forceInset={{ top: 'always', horizontal: 'never' }}>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
