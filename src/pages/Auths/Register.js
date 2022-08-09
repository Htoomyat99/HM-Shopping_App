import {View, Text, ToastAndroid} from 'react-native';
import React, {useContext, useState} from 'react';

//components
import {AuthContext} from '../../context/context';
import RegisterHeader from '../../components/Auths/Register/RegisterHeader';
import {appStorage} from '../../utils/appStorage';
import {useLocal} from '../../hook/useLocal';

const Register = ({navigation}) => {
  const local = useLocal();
  const {getAuthen, getUserInfo} = useContext(AuthContext);

  const [showPass, setShowPass] = useState(true);
  const [showConfirmPass, setshowConfrimPass] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');

  const registerHandler = () => {
    let token = '1234567890';
    const userData = {
      email: email,
      password: password,
    };
    try {
      if (userData.email && userData.password && confirmPass) {
        if (userData.password === confirmPass) {
          appStorage.setItem('@user.data', JSON.stringify(userData));
          appStorage.setItem('@user.token', token);
          getAuthen(false);
          getUserInfo(userData);
          ToastAndroid.show(local.RegisterSuccessfulText, ToastAndroid.SHORT);
          console.log('userData >>>', userData);
        } else {
          ToastAndroid.show(local.SamePasswordText, ToastAndroid.SHORT);
        }
      } else {
        ToastAndroid.show(local.RequestText, ToastAndroid.SHORT);
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <RegisterHeader
      goLogin={() => navigation.navigate('Login')}
      registerHandler={registerHandler}
      showPass={showPass}
      showPassHandler={() => setShowPass(!showPass)}
      showConfirmPass={showConfirmPass}
      showConfirmPassHandler={() => setshowConfrimPass(!showConfirmPass)}
      emailValue={email}
      onChangeEmail={value => setEmail(value)}
      passValue={password}
      onChangePass={value => setPassword(value)}
      confirmPassValue={confirmPass}
      onChangeConfrimPass={value => setConfirmPass(value)}
    />
  );
};

export default Register;
