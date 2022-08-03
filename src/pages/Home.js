import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const Home = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
        <Text>Go Dash</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
