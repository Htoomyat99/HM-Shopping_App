import {View, Text, Image} from 'react-native';
import React, {useContext} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//components
import TabNavigatorScreen from './TabNavigator';
import CustomDrawer from './CustomDrawer';
import {useLocal} from '../../hook/useLocal';
import {AuthContext} from '../../context/context';

//Screen
import ProfileScreen from '../../pages/Profile/Profile';
import TermScreen from '../../pages/Terms/Terms';
import SettingScreen from '../../pages/Setting/Setting';

//icons
import HomeIcon from '../../../assets/icons/HomeIcon';
import ProfileIcon from '../../../assets/icons/ProfileIcon';
import TermsIcon from '../../../assets/icons/TermsIcon';
import SettingIcon from '../../../assets/icons/SettingIcon';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const local = useLocal();
  const {darkMode} = useContext(AuthContext);

  const headerTitle = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          style={{width: wp(8), height: wp(8), borderRadius: wp(4)}}
          source={require('../../../assets/images/profileImg.jpg')}
        />
        <Text
          style={{
            fontFamily: 'RobotoCondensed-Bold',
            fontSize: wp(4.5),
            marginLeft: wp(2),
          }}>
          HM_Shopping
        </Text>
      </View>
    );
  };

  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#2FF500'},
        headerTitleAlign: 'center',
        drawerLabelStyle: {
          marginLeft: wp(-5),
          fontSize: wp(4.5),
          marginVertical: wp(1),
          fontFamily: 'RobotoCondensed-Regular',
        },
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: darkMode ? '#fff' : '#000',
        drawerActiveBackgroundColor: '#01D201',
        headerShown: false,
      }}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name="TabNavigator"
        component={TabNavigatorScreen}
        options={{
          drawerIcon: ({focused}) => (
            <HomeIcon
              width={wp(6.4)}
              height={wp(6.4)}
              inColor={focused ? '#fff' : '#01D201'}
            />
          ),
          title: local.Home,
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          drawerIcon: ({focused}) => (
            <ProfileIcon
              width={wp(6.4)}
              height={wp(6.4)}
              outColor={focused ? '#fff' : '#01D201'}
            />
          ),
          title: local.Profile,
        }}
      />
      <Drawer.Screen
        name="Terms"
        component={TermScreen}
        options={{
          drawerIcon: ({focused}) => (
            <TermsIcon
              width={wp(6.4)}
              height={wp(6.4)}
              inColor={focused ? '#fff' : '#01D201'}
              outColor={focused ? '#fff' : '#01D201'}
            />
          ),
          title: local.Terms,
        }}
      />
      <Drawer.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          drawerIcon: ({focused}) => (
            <SettingIcon
              width={wp(6.4)}
              height={wp(6.4)}
              outColor={focused ? '#fff' : '#01D201'}
              inColor={focused ? '#fff' : '#01D201'}
            />
          ),
          title: local.Setting,
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
