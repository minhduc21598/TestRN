import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';

import RootNavigator from './app/navigation/RootNavigator';
import { navigationRef } from './app/navigation/navigation-service';

const AppContainer = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer ref={navigationRef}>
        <RootNavigator />
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default AppContainer;
