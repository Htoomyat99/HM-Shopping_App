import {View, Text, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';

//components
import {AuthContext} from '../../context/context';
import LoginHeader from '../../components/Auths/Login/LoginHeader';

const Login = ({navigation}) => {
  const {getAuthen} = useContext(AuthContext);
  return (
    <LoginHeader
      navi={() => navigation.navigate('Register')}
      onClick={() => getAuthen(false)}
    />
  );
};

export default Login;
