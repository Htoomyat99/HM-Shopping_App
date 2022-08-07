import {View, Text} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

//components
import TabNavigatorScreen from './TabNavigator';
import ProfileScreen from '../../pages/Profile/Profile';
import CustomDrawer from '../../components/CustomDrawer';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen name="TabNavigator" component={TabNavigatorScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
