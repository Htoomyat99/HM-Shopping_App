import {View, Text} from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

const CustomDrawer = props => {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: '#ff8800'}}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View>
        <Text>Log out</Text>
      </View>
    </View>
  );
};

export default CustomDrawer;
