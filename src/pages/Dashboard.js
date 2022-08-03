import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const Dashboard = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Dashboard Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text>Go back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Dashboard;
