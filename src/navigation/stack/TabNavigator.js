import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//components
import DashboardStack from './DashboardStack';
import OrderScreen from '../../pages/Order/Order';
import FavoriteScreen from '../../pages/Favorite/Favorite';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="DashboardStack" component={DashboardStack} />
      <Tab.Screen name="OrderStack" component={OrderScreen} />
      <Tab.Screen name="FavoriteStack" component={FavoriteScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
