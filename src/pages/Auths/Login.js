import {View, Text, ToastAndroid} from 'react-native';
import React, {useContext, useState} from 'react';

//components
import {AuthContext} from '../../context/context';
import LoginHeader from '../../components/Auths/Login/LoginHeader';
import {appStorage} from '../../utils/appStorage';
import {useLocal} from '../../hook/useLocal';

const Login = ({navigation}) => {
  const local = useLocal();
  const {getAuthen, getUserInfo} = useContext(AuthContext);

  const [showPass, setShowPass] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginHandler = () => {
    let token = '1234567890';
    try {
      const data = appStorage.getItem('@user.data');
      if (email && password) {
        if (data) {
          const formatData = JSON.parse(data);
          if (formatData.email === email && formatData.password === password) {
            getAuthen(false);
            getUserInfo(formatData);
            appStorage.setItem('@user.token', token);
            ToastAndroid.show(local.LoginSuccessText, ToastAndroid.SHORT);
          } else {
            ToastAndroid.show(local.ErrorText, ToastAndroid.SHORT);
          }
        } else {
          ToastAndroid.show(local.RegisterText, ToastAndroid.SHORT);
        }
      } else {
        ToastAndroid.show(local.RequestText, ToastAndroid.SHORT);
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <LoginHeader
      goRegister={() => navigation.navigate('Register')}
      showPass={showPass}
      showPassHandler={() => setShowPass(!showPass)}
      loginHandler={loginHandler}
      emailValue={email}
      onChangeEmail={value => setEmail(value)}
      passValue={password}
      onChangePass={value => setPassword(value)}
    />
  );
};

export default Login;
