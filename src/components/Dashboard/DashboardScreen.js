import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';

//components

const DashboardScreen = props => {
  return (
    <View>
      <Text>Dashboard Screen</Text>
      <TouchableOpacity onPress={props.navi}>
        <Text>Go ProductDetail</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={props.openDrawer}>
        <Image
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            position: 'absolute',
            top: 0,
            right: 80,
          }}
          source={require('../../../assets/images/profile.jpg')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default DashboardScreen;
