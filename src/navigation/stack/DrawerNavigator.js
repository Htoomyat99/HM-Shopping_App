import {View, Text} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//components
import TabNavigatorScreen from './TabNavigator';
import CustomDrawer from './CustomDrawer';

//Screen
import ProfileScreen from '../../pages/Profile/Profile';
import TermScreen from '../../pages/Terms/Terms';
import SettingScreen from '../../pages/Setting/Setting';

//icons
import HomeIcon from '../../../assets/icons/HomeIcon';
import ProfileIcon from '../../../assets/icons/ProfileIcon';
import TermsIcon from '../../../assets/icons/TermsIcon';
import SettingIcon from '../../../assets/icons/SettingIcon';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerLabelStyle: {
          marginLeft: wp(-5),
          fontSize: wp(4.5),
          fontFamily: 'RobotoCondensed-Regular',
        },
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#000',
        drawerActiveBackgroundColor: 'green',
      }}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name="TabNavigator"
        component={TabNavigatorScreen}
        options={{
          drawerIcon: ({focused}) => (
            <HomeIcon
              width={wp(6.4)}
              height={wp(6.4)}
              inColor={focused ? '#fff' : '#008000'}
            />
          ),
          title: 'Home',
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          drawerIcon: ({focused}) => (
            <ProfileIcon
              width={wp(6.4)}
              height={wp(6.4)}
              outColor={focused ? '#fff' : '#008000'}
            />
          ),
          title: 'Profile',
        }}
      />
      <Drawer.Screen
        name="Terms"
        component={TermScreen}
        options={{
          drawerIcon: ({focused}) => (
            <TermsIcon
              width={wp(6.4)}
              height={wp(6.4)}
              inColor={focused ? '#fff' : '#008000'}
              outColor={focused ? '#fff' : '#008000'}
            />
          ),
          title: 'Terms & Conditions',
        }}
      />
      <Drawer.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          drawerIcon: ({focused}) => (
            <SettingIcon
              width={wp(6.4)}
              height={wp(6.4)}
              outColor={focused ? '#fff' : '#008000'}
              inColor={focused ? '#fff' : '#008000'}
            />
          ),
          title: 'Setting',
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
