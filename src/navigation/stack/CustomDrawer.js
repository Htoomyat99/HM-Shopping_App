import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  StyleSheet,
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

//icons
import SignOutIcon from '../../../assets/icons/SignOutIcon';

const CustomDrawer = props => {
  const {getAuthen} = useContext(AuthContext);

  const styles = StyleSheet.create({
    image: {
      width: wp(20),
      height: wp(20),
      borderRadius: wp(10),
      marginBottom: wp(2.5),
    },
    imageText: {
      fontFamily: 'RobotoCondensed-Bold',
      fontSize: wp(4.3),
    },
    drawerContainer: {
      paddingTop: wp(4),
      backgroundColor: '#fff',
    },
    footer: {
      padding: wp(5),
      borderTopWidth: wp(0.15),
      borderTopColor: '#ddd',
    },
    footerBox: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    footerText: {
      fontFamily: 'RobotoCondensed-Regular',
      marginHorizontal: wp(2),
      fontSize: wp(4.5),
      color: '#008000',
    },
  });

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: '#FF6C0A'}}>
        <ImageBackground
          style={{padding: wp(5)}}
          source={require('../../../assets/images/drawerbg.jpg')}>
          <Image
            style={styles.image}
            source={require('../../../assets/images/profile.jpg')}
          />
          <Text style={styles.imageText}>John Snow</Text>
        </ImageBackground>
        <View style={styles.drawerContainer}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={styles.footer}>
        <TouchableOpacity
          onPress={() => getAuthen(true)}
          style={styles.footerBox}>
          <SignOutIcon
            width={25}
            height={25}
            outColor="#008000"
            inColor="#008000"
          />
          <Text style={styles.footerText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;
