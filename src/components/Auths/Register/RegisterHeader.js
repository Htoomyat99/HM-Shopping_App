import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const RegisterHeader = props => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Register Screen</Text>
      <TouchableOpacity onPress={props.navi}>
        <Text>Go back</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={props.onClick}>
        <Text>Go dashboard</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterHeader;
