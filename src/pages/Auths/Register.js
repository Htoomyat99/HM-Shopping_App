import {View, Text, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';

//components
import {AuthContext} from '../../context/context';
import RegisterHeader from '../../components/Auths/Register/RegisterHeader';

const Register = ({navigation}) => {
  const {getAuthen} = useContext(AuthContext);

  return (
    <RegisterHeader
      navi={() => navigation.navigate('Login')}
      onClick={() => getAuthen(false)}
    />
  );
};

export default Register;
