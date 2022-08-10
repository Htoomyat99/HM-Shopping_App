import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//components
import DashboardStack from './DashboardStack';
import OrderScreen from '../../pages/Order/Order';
import FavoriteScreen from '../../pages/Favorite/Favorite';
import {useLocal} from '../../hook/useLocal';

//Icons
import HomeIcon from '../../../assets/icons/HomeIcon';
import CartIcon from '../../../assets/icons/CartIcon';
import FavoriteIcon from '../../../assets/icons/FavoriteIcon';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const local = useLocal();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#fff',
          height: hp(8),
          position: 'absolute',
          bottom: hp(2),
          left: wp(4),
          right: wp(4),
          elevation: 0,
          borderRadius: wp(3),
          shadowOffset: {width: 0, height: 5},
          shadowColor: 'blue',
          shadowOpacity: hp(0.4),
          elevation: wp(0.5),
        },
      }}>
      <Tab.Screen
        name="DashboardStack"
        component={DashboardStack}
        options={{
          title: local.Home,
          tabBarActiveTintColor: '#00D000',
          tabBarInactiveTintColor: '#999',
          tabBarIcon: ({focused, size, color}) => (
            <HomeIcon
              inColor={focused ? '#00D000' : '#999'}
              width={hp(3.7)}
              height={hp(3.7)}
            />
          ),
          tabBarLabelStyle: {
            fontSize: wp(4),
            paddingBottom: hp(0.5),
            fontFamily: 'RobotoCondensed-Regular',
          },
          tabBarIconStyle: {
            marginTop: hp(1),
          },
        }}
      />
      <Tab.Screen
        name="OrderStack"
        component={OrderScreen}
        options={{
          title: local.Order,
          tabBarActiveTintColor: '#00D000',
          tabBarInactiveTintColor: '#999',
          tabBarIcon: ({focused, size, color}) => (
            <CartIcon
              outColor={focused ? '#00D000' : '#999'}
              inColor="#fff"
              width={hp(4.2)}
              height={hp(4.2)}
            />
          ),
          tabBarLabelStyle: {
            fontSize: wp(4),
            paddingBottom: hp(0.5),
            fontFamily: 'RobotoCondensed-Regular',
          },
          tabBarIconStyle: {
            marginTop: hp(1.7),
          },
        }}
      />
      <Tab.Screen
        name="FavoriteStack"
        component={FavoriteScreen}
        options={{
          title: local.Favorite,
          tabBarActiveTintColor: '#00D000',
          tabBarInactiveTintColor: '#999',
          tabBarIcon: ({focused, size, color}) => (
            <FavoriteIcon
              inColor={focused ? '#00D000' : '#999'}
              width={hp(3)}
              height={hp(3)}
            />
          ),
          tabBarLabelStyle: {
            fontSize: wp(4),
            paddingBottom: hp(0.5),
            fontFamily: 'RobotoCondensed-Regular',
          },
          tabBarIconStyle: {
            marginTop: hp(1.7),
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
