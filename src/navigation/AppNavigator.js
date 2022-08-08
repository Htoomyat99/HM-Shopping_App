import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';

//components
import AuthStack from './stack/AuthStack';
import {AuthContext} from '../context/context';
import DrawerNavigator from './stack/DrawerNavigator';
import {appStorage} from '../utils/appStorage';

const AppNavigator = () => {
  const [lang, setLang] = useState(null);
  const [authen, setAuthen] = useState(true);

  const context = {
    lang,
    authen,
    getAuthen: value => {
      setAuthen(value);
    },
    getLang: value => {
      setLang(value);
    },
  };

  useEffect(() => {
    setLang(appStorage.getItem('@language'));
  }, []);

  if (authen === true) {
    return (
      <AuthContext.Provider value={context}>
        <NavigationContainer>
          <AuthStack />
        </NavigationContainer>
      </AuthContext.Provider>
    );
  } else {
    return (
      <AuthContext.Provider value={context}>
        <NavigationContainer>
          <DrawerNavigator />
        </NavigationContainer>
      </AuthContext.Provider>
    );
  }
};

export default AppNavigator;
