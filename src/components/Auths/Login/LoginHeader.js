import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const LoginHeader = props => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Login Screen</Text>
      <TouchableOpacity onPress={props.navi}>
        <Text>Go Register</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={props.onClick}>
        <Text>Go Dashboard</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginHeader;
