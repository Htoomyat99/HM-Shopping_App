import {View, Text, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';

//components
import {AuthContext} from '../../context/context';

const Register = ({navigation}) => {
  const {getAuthen} = useContext(AuthContext);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Register Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text>Go back</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => getAuthen(false)}>
        <Text>Go dashboard</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;
