import {View, Text} from 'react-native';
import React, {useEffect} from 'react';

const CartContent = props => {
  useEffect(() => {
    console.log('data>>>>', props.data);
  });
  return props.data.map(item => (
    <View key={item.id}>
      <Text>{item.price}</Text>
    </View>
  ));
};

export default CartContent;
