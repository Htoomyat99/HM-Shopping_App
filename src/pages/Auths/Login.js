import {View, Text, TouchableOpacity} from 'react-native';
import React, {useContext, useState} from 'react';

//components
import {AuthContext} from '../../context/context';
import LoginHeader from '../../components/Auths/Login/LoginHeader';

const Login = ({navigation}) => {
  const {getAuthen} = useContext(AuthContext);
  const [showPass, setShowPass] = useState(true);

  return (
    <LoginHeader
      goRegister={() => navigation.navigate('Register')}
      onClick={() => getAuthen(false)}
      showPass={showPass}
      showPassHandler={() => setShowPass(!showPass)}
      loginHandler={() => getAuthen(false)}
    />
  );
};

export default Login;
