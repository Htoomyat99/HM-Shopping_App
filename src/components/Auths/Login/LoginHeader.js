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

//style
import styles from './style';

//components
import {useLocal} from '../../../hook/useLocal';
import {AuthContext} from '../../../context/context';
import {appStorage} from '../../../utils/appStorage';

//icons
import EyeOnIcon from '../../../../assets/icons/EyeOnIcon';
import EyeOffIcon from '../../../../assets/icons/EyeOffIcon';

const LoginHeader = props => {
  const local = useLocal();

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.bgImage}
        source={require('../../../../assets/images/loginUi1.jpg')}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../../../assets/images/loginImg.png')}
            style={styles.image}
          />
        </View>
        <View style={styles.textContainer}>
          <View style={styles.emailBox}>
            <Text style={styles.emailText}>Email Address</Text>
            <TextInput
              style={styles.emailInput}
              placeholder="username@gmail.com"
            />
          </View>
          <View style={styles.emailBox}>
            <Text style={styles.emailText}>Password</Text>
            <TextInput
              style={styles.emailInput}
              placeholder="at least 6 characters"
              secureTextEntry={props.showPass ? true : false}
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
              <Text style={styles.signInText}>Log In</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.footer}>
            <Text style={styles.footerText}>New to Logistics?</Text>
            <TouchableOpacity onPress={props.goRegister} activeOpacity={0.5}>
              <Text style={styles.footerText}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default LoginHeader;
