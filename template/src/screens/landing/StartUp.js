import React, {useEffect} from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Layout} from '@ui-kitten/components';

import AppColor from '../../constents/AppColor';

import * as authActions from '../../redux/actions/auth';

const StartupScreen = props => {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      const tryLogin = async () => {
        const userToken = await AsyncStorage.getItem('userToken');
        if (!userToken) {
          // props.navigation.navigate('Auth');
          dispatch(authActions.setDidTryAL());
          return;
        }

        // props.navigation.navigate('Shop');
        dispatch(authActions.authenticate('userId', 'token'));
      };

      tryLogin();
    }, 5000);
  }, [dispatch]);

  return (
    <Layout style={styles.screen}>
      <ActivityIndicator size="large" color={AppColor.WHITE} />
    </Layout>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default StartupScreen;
