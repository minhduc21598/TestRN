import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { APP_SCREEN, RootStackParamList } from './screen-types';
import MainScreen from '@screens/MainScreen';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigation = () => {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Group
        screenOptions={{
          freezeOnBlur: true,
          animationTypeForReplace: 'pop',
          gestureEnabled: true,
        }}>
        <RootStack.Screen
          name={APP_SCREEN.MAIN_SCREEN}
          component={MainScreen}
        />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export default RootNavigation;
