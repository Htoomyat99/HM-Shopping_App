import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  StyleSheet,
  ToastAndroid,
} from 'react-native';
import React, {useContext} from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//components
import {AuthContext} from '../../context/context';
import {appStorage} from '../../utils/appStorage';
import {useLocal} from '../../hook/useLocal';

//icons
import SignOutIcon from '../../../assets/icons/SignOutIcon';
import LightIcon from '../../../assets/icons/LightIcon';
import DarkIcon from '../../../assets/icons/DarkIcon';

const CustomDrawer = props => {
  const local = useLocal();
  const {getAuthen, darkMode, getDarkMode, userInfo, name} =
    useContext(AuthContext);

  const styles = StyleSheet.create({
    image: {
      width: wp(20),
      height: wp(20),
      borderRadius: wp(10),
      marginBottom: wp(2.5),
    },
    imageText: {
      fontFamily: 'RobotoCondensed-Bold',
      fontSize: wp(4.5),
    },
    drawerContainer: {
      paddingTop: wp(4),
      backgroundColor: darkMode ? '#222' : '#fff',
    },
    footer: {
      padding: wp(5),
      borderTopWidth: wp(0.15),
      borderTopColor: '#ddd',
      backgroundColor: darkMode ? '#222' : '#fff',
    },
    footerBox: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    footerText: {
      fontFamily: 'RobotoCondensed-Regular',
      marginHorizontal: wp(2),
      fontSize: wp(4.5),
      color: darkMode ? '#fff' : '#01D201',
    },
  });

  const logOutHandler = () => {
    appStorage.removeItem('@user.token');
    getAuthen(true);
    ToastAndroid.show(local.LogOutSuccess, ToastAndroid.SHORT);
  };

  const ThemeHandler = () => {
    getDarkMode(!darkMode);
    // appStorage.setItem('@colorTheme', JSON.stringify(darkMode));
  };

  return (
    <View style={{flex: 1, backgroundColor: darkMode ? '#222' : '#fff'}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: '#5BBF61'}}>
        <ImageBackground
          style={{
            padding: wp(5),
            flexDirection: 'row-reverse',
            justifyContent: 'space-between',
          }}
          source={require('../../../assets/images/drawerBg.png')}>
          <TouchableOpacity onPress={ThemeHandler}>
            {darkMode ? (
              <DarkIcon
                width={wp(7)}
                height={wp(7)}
                inColor="#fff"
                outColor="#fff"
              />
            ) : (
              <LightIcon
                width={wp(9)}
                height={wp(9)}
                inColor="#fff"
                outColor="#fff"
              />
            )}
          </TouchableOpacity>
          <View>
            <Image
              style={styles.image}
              source={require('../../../assets/images/profileImg.jpg')}
            />
            <Text style={styles.imageText}>{name ? name : 'UserName'}</Text>
            <Text style={styles.imageText}>
              {userInfo ? userInfo.email : ''}
            </Text>
          </View>
        </ImageBackground>
        <View style={styles.drawerContainer}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={styles.footer}>
        <TouchableOpacity onPress={logOutHandler} style={styles.footerBox}>
          <SignOutIcon
            width={25}
            height={25}
            outColor="#01D201"
            inColor="#01D201"
          />
          <Text style={styles.footerText}>{local.LogOut}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;
