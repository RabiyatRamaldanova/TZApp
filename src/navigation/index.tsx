import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {CardList, WelcomeScreen} from '../components';

const RootStack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <RootStack.Navigator screenOptions={{headerShown: false}}>
          <RootStack.Screen name="WelcomeScreen" component={WelcomeScreen} />
          <RootStack.Screen name="CardsScreen" component={CardList} />
        </RootStack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default RootNavigation;
