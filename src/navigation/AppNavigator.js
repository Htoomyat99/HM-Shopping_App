import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';

//components
import AuthStack from './stack/AuthStack';
import {AuthContext} from '../context/context';
import DrawerNavigator from './stack/DrawerNavigator';
import {appStorage} from '../utils/appStorage';
import store from '../store';

const AppNavigator = () => {
  const [lang, setLang] = useState(null);
  const [authen, setAuthen] = useState(true);
  const [userInfo, setUserInfo] = useState(null);
  const [splash, setSplash] = useState(true);
  const [darkMode, setDarkMode] = useState(null);
  const [name, setName] = useState(null);

  const context = {
    lang,
    userInfo,
    authen,
    darkMode,
    name,
    getAuthen: value => {
      setAuthen(value);
    },
    getLang: value => {
      setLang(value);
    },
    getUserInfo: value => {
      setUserInfo(value);
    },
    getDarkMode: value => {
      setDarkMode(value);
    },
    getName: value => {
      setName(value);
    },
  };

  useEffect(() => {
    getData();
    console.log(darkMode);
  }, []);

  const getData = () => {
    try {
      const token = appStorage.getItem('@user.token');
      const userData = appStorage.getItem('@user.data');
      const storeLang = appStorage.getItem('@language');
      const userName = appStorage.getItem('@user.name');
      setName(userName);
      setLang(storeLang);
      if (token) {
        setAuthen(false);
        setUserInfo(JSON.parse(userData));
        setTimeout(() => {
          setSplash(false);
        }, 1500);
      } else {
        setAuthen(true);
        setTimeout(() => {
          setSplash(false);
        }, 1500);
      }
    } catch (error) {
      console.log('error', error);
      setAuthen(true);
    }
  };

  if (splash) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Welcome to our App</Text>
      </View>
    );
  } else if (authen) {
    return (
      <AuthContext.Provider value={context}>
        <NavigationContainer>
          <AuthStack />
        </NavigationContainer>
      </AuthContext.Provider>
    );
  } else {
    return (
      <Provider store={store}>
        <AuthContext.Provider value={context}>
          <NavigationContainer>
            <DrawerNavigator />
          </NavigationContainer>
        </AuthContext.Provider>
      </Provider>
    );
  }
};

export default AppNavigator;
