import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Platform, SafeAreaView, Button, View} from 'react-native';

import AppColor from '../constents/AppColor';

import Home from '../screens/app/home/Home';
import SignIn from '../screens/auth/signin/SignIn';
import SignUp from '../screens/auth/signup/SignUp';

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? AppColor.primary : '',
  },
  headerTitleStyle: {
    fontFamily: 'open-sans-bold',
  },
  headerBackTitleStyle: {
    fontFamily: 'open-sans',
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : AppColor.primary,
  headerShown: false,
};

const AuthStackNavigator = createNativeStackNavigator();

export const AuthNavigator = () => {
  return (
    <AuthStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <AuthStackNavigator.Screen name="SignIn" component={SignIn} />
      <AuthStackNavigator.Screen name="SignUp" component={SignUp} />
    </AuthStackNavigator.Navigator>
  );
};

const AppStackNavigator = createNativeStackNavigator();

export const AppNavigator = () => {
  return (
    <AppStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <AuthStackNavigator.Screen name="Home" component={Home} />
    </AppStackNavigator.Navigator>
  );
};
