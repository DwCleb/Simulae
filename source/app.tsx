import React, { Suspense, useContext } from 'react';
import { ActivityIndicator, StyleSheet, Platform, StatusBar } from 'react-native';

import Routes from '~/routes';
import { ThemeManager, Colors } from '~/theme';
import { KeyboardAvoidingView, AlertModal } from '~/components';
import { SystemContext } from '~/services/store/reducers';

const styles = StyleSheet.create({
  activityIndicatorStyle: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
  },
});

function App(): JSX.Element {
  const { systemState, setSystemData } = useContext(SystemContext);

  return (
    <ThemeManager>
      <Suspense fallback={<ActivityIndicator size="large" color="black" style={styles.activityIndicatorStyle} />}>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <StatusBar backgroundColor={Colors.theme.monochromatic.black} barStyle="light-content" />
          <Routes />
          <AlertModal
            modalVisible={systemState.hasError}
            onClose={(): void => setSystemData({ hasError: false, error: { title: '', message: '' } })}
            title={systemState.error.title}
            message={systemState.error.message}
          />
        </KeyboardAvoidingView>
      </Suspense>
    </ThemeManager>
  );
}

export default App;
