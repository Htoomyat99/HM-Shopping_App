import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
  ToastAndroid,
} from 'react-native';
import React, {useContext, useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import styles from './style';

//components
import {AuthContext} from '../../context/context';
import {useLocal} from '../../hook/useLocal';
import {appStorage} from '../../utils/appStorage';

//icons
import BackIcon from '../../../assets/icons/BackIcon';
import AccountIcon from '../../../assets/icons/AccountIcon';
import NotiIcon from '../../../assets/icons/NotiIcon';
import HelpIcon from '../../../assets/icons/HelpIcon';

const Profile = ({navigation}) => {
  const local = useLocal();
  const {darkMode, userInfo, name, getName, getAuthen} =
    useContext(AuthContext);

  const [showModal, setShowModal] = useState(false);

  const editHandler = () => {
    setShowModal(true);
    getName('');
  };

  const doneHandler = () => {
    setShowModal(false);
    appStorage.setItem('@user.name', name);
  };

  const logOutHandler = () => {
    appStorage.removeItem('@user.token');
    getAuthen(true);
    ToastAndroid.show(local.LogOutSuccess, ToastAndroid.SHORT);
  };

  const alertHandler = () => {
    ToastAndroid.show(local.NoService, ToastAndroid.SHORT);
  };

  const internalStyles = StyleSheet.create({
    BodyContainer: {
      backgroundColor: darkMode ? '#222' : '#fff',
    },
    name: {
      color: darkMode ? '#fff' : '#8e8e8e',
    },
  });

  return (
    <View>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backIcon}>
          <BackIcon width={wp(7)} height={wp(7)} Color="#444" />
        </TouchableOpacity>
        <Text style={styles.headerContainerText}>{local.Profile}</Text>
      </View>
      <View style={{...styles.BodyContainer, ...internalStyles.BodyContainer}}>
        <Image
          source={require('../../../assets/images/profileImg.jpg')}
          style={styles.image}
        />
        {showModal ? (
          <View style={styles.modalContainer}>
            <TextInput
              placeholder="Add your name..."
              style={styles.input}
              value={name}
              onChangeText={value => getName(value)}
              placeholderTextColor={darkMode ? '#fff' : '#8e8e8e'}
            />
            <TouchableOpacity onPress={doneHandler}>
              <Text
                style={{
                  ...internalStyles.name,
                  ...styles.submit,
                }}>
                Submit
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.nameBox}>
            <Text style={{...styles.name, ...internalStyles.name}}>
              {name ? name : 'User Name'}
            </Text>
            <TouchableOpacity onPress={editHandler}>
              <Text style={{...styles.editText, ...internalStyles.name}}>
                Edit
              </Text>
            </TouchableOpacity>
          </View>
        )}
        <View style={styles.emailContainer}>
          <Text style={{...styles.email, ...internalStyles.name}}>
            {userInfo ? userInfo.email : ''}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.container}
          activeOpacity={0.5}
          onPress={alertHandler}>
          <AccountIcon
            width={wp(6)}
            height={wp(6)}
            Color={darkMode ? '#fff' : '#2FF500'}
          />
          <Text style={{...styles.containerText, ...internalStyles.name}}>
            {local.MyAccount}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.container}
          activeOpacity={0.5}
          onPress={alertHandler}>
          <NotiIcon
            width={wp(6)}
            height={wp(6)}
            Color={darkMode ? '#fff' : '#2FF500'}
          />
          <Text style={{...styles.containerText, ...internalStyles.name}}>
            {local.Noti}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.container}
          activeOpacity={0.5}
          onPress={alertHandler}>
          <HelpIcon
            width={wp(6)}
            height={wp(6)}
            Color={darkMode ? '#fff' : '#2FF500'}
          />
          <Text style={{...styles.containerText, ...internalStyles.name}}>
            {local.HelpCenter}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={logOutHandler} style={styles.logOutBtn}>
          <Text style={styles.logOutText}>{local.LogOut}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;
