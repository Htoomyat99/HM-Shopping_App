import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//pages
import DashboardScreen from '../../pages/Dashboard';
import HomeScreen from '../../pages/Home';
import SliderScreen from '../../pages/Slider';

//utils
import {appStorage} from '../../utils/appStorage';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);

  useEffect(() => {
    const value = appStorage.getItem('@launch.state');
    if (value === undefined) {
      appStorage.setItem('@launch.state', 'true');
      setIsFirstLaunch(true);
    } else {
      setIsFirstLaunch(false);
    }
  }, []);

  if (isFirstLaunch === null) {
    return null;
  } else if (isFirstLaunch === true) {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Slider" component={SliderScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
      </Stack.Navigator>
    );
  } else {
    return <HomeScreen />;
  }
};

export default AuthStack;
