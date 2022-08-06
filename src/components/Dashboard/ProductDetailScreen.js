import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const ProductDetailScreen = props => {
  return (
    <View>
      <Text>ProductDetailScreen</Text>
      <TouchableOpacity onPress={props.navi}>
        <Text>Go Dash</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductDetailScreen;
