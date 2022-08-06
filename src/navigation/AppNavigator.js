import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';

//components
import AuthStack from './stack/AuthStack';
import {AuthContext} from '../context/context';
import DrawerNavigator from './stack/DrawerNavigator';

const AppNavigator = () => {
  const [authen, setAuthen] = useState(true);

  const context = {
    authen,
    getAuthen: value => {
      setAuthen(value);
    },
  };

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
