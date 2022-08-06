import {View, Text} from 'react-native';
import React from 'react';

//components
import ProductDetailScreen from '../../components/Dashboard/ProductDetailScreen';

const ProductDetail = ({navigation}) => {
  return <ProductDetailScreen navi={() => navigation.navigate('Dashboard')} />;
};

export default ProductDetail;
