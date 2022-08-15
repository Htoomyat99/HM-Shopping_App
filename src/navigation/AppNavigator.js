import {View, Text, TouchableOpacity, Animated} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

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
  const [productInfo, setProductInfo] = useState(null);

  const context = {
    lang,
    userInfo,
    authen,
    darkMode,
    name,
    productInfo,
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
    getProductInfo: value => {
      setProductInfo(value);
    },
  };

  const position = useRef(new Animated.Value(wp(10))).current;

  useEffect(() => {
    getData();
    Animated.timing(position, {
      toValue: wp(80),
      duration: 2000,
      useNativeDriver: false,
    }).start();
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
        }, 2000);
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

  const bgColor2 = position.interpolate({
    inputRange: [10, 90, 170, 250],
    outputRange: ['white', 'red', 'blue', 'green'],
  });

  const rotation = position.interpolate({
    inputRange: [10, 250],
    outputRange: ['0deg', '360deg'],
  });

  if (splash) {
    return (
      <View style={{flex: 1}}>
        <Animated.View
          style={[
            {
              width: hp(4),
              height: hp(4),
              borderRadius: hp(6),
              backgroundColor: 'red',
              marginTop: hp(40),
            },
            {
              transform: [
                {
                  translateX: position,
                },
                {
                  rotate: rotation,
                },
              ],
              backgroundColor: bgColor2,
            },
          ]}
        />
        <Text
          style={{
            marginLeft: wp(20),
            width: wp(80),
            fontFamily: 'RobotoCondensed-Regular',
            fontSize: wp(5),
          }}>
          Welcome from H_M Shopping
        </Text>
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
