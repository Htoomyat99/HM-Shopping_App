import {View, Text, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';

//components
import {AuthContext} from '../../context/context';

const DashboardScreen = props => {
  const {getAuthen} = useContext(AuthContext);
  return (
    <View>
      <Text>Dashboard Screen</Text>
      <TouchableOpacity onPress={() => getAuthen(true)}>
        <Text>Go auth</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={props.navi}>
        <Text>Go ProductDetail</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DashboardScreen;
