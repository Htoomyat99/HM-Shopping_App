import {View, Text} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//components
import DashboardScreen from '../../pages//Dashboard/Dashboard';
import ProductDetailScreen from '../../pages/Dashboard/ProductDetail';

const Stack = createNativeStackNavigator();

const DashboardStack = ({navigation, route}) => {
  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === 'ProductDetail') {
      navigation.setOptions({tabBarStyle: {display: 'none'}});
    } else {
      navigation.setOptions({
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
      });
    }
  }, [navigation, route]);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
      <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
    </Stack.Navigator>
  );
};

export default DashboardStack;
