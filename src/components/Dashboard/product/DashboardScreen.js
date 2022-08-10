import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useContext} from 'react';

//components
import {AuthContext} from '../../../context/context';

const DashboardScreen = props => {
  const {darkMode} = useContext(AuthContext);

  return (
    <View style={{flex: 1, backgroundColor: darkMode ? '#222' : '#fff'}}>
      <Text>Dashboard Screen</Text>
      <TouchableOpacity onPress={props.navi}>
        <Text>Go ProductDetail</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={props.openDrawer}>
        <Image
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            position: 'absolute',
            top: 0,
            right: 80,
          }}
          source={require('../../../../assets/images/profileImg.jpg')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default DashboardScreen;
