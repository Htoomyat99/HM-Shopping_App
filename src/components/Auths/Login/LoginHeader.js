import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
  TextInput,
} from 'react-native';
import React, {useContext} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//Keyboard avoiding View
import KeyboardAvoidingWrapper from '../KeyboardAvoidingWrapper';

//style
import styles from './style';

//components
import {useLocal} from '../../../hook/useLocal';

//icons
import EyeOnIcon from '../../../../assets/icons/EyeOnIcon';
import EyeOffIcon from '../../../../assets/icons/EyeOffIcon';

const LoginHeader = props => {
  const local = useLocal();

  return (
    <KeyboardAvoidingWrapper>
      <View style={styles.container}>
        <ImageBackground
          style={styles.bgImage}
          source={require('../../../../assets/images/loginBg.jpg')}>
          <View style={styles.imageContainer}>
            <Image
              source={require('../../../../assets/images/loginImg.png')}
              style={styles.image}
            />
          </View>
          <View style={styles.textContainer}>
            <View style={styles.emailBox}>
              <Text style={styles.emailText}>{local.EmailAddress}</Text>
              <TextInput
                style={styles.emailInput}
                placeholder="username@gmail.com"
                value={props.emailValue}
                onChangeText={props.onChangeEmail}
              />
            </View>
            <View style={styles.emailBox}>
              <Text style={styles.emailText}>{local.Password}</Text>
              <TextInput
                style={styles.emailInput}
                placeholder="At least 6 characters"
                secureTextEntry={props.showPass ? true : false}
                value={props.passValue}
                onChangeText={props.onChangePass}
              />
              {props.showPass ? (
                <TouchableOpacity
                  style={styles.eyeOffBox}
                  onPress={props.showPassHandler}>
                  <EyeOffIcon width={wp(6)} height={wp(6)} outColor="#000" />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={styles.eyeOnBox}
                  onPress={props.showPassHandler}>
                  <EyeOnIcon width={wp(6)} height={hp(6)} outColor="#000" />
                </TouchableOpacity>
              )}
            </View>
            <View style={styles.signInContainer}>
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.signInBox}
                onPress={props.loginHandler}>
                <Text style={styles.signInText}>{local.LogIn}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.footer}>
              <Text style={styles.footerText}>{local.Account}</Text>
              <TouchableOpacity onPress={props.goRegister} activeOpacity={0.5}>
                <Text style={styles.Text}>{local.Register}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    </KeyboardAvoidingWrapper>
  );
};

export default LoginHeader;
