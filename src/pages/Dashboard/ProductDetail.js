import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';

//components
import ProductDetailScreen from '../../components/Dashboard/productDetail/ProductDetailScreen';
import * as actionCart from '../../store/action/cart';
import {Value} from 'react-native-reanimated';

const ProductDetail = ({navigation, route}) => {
  const {productData} = route.params;
  const dispatch = useDispatch();

  const addCartHandler = value => {
    dispatch(actionCart.addToCart(value));
  };

  return (
    <ProductDetailScreen
      data={productData}
      backHandler={() => navigation.navigate('Dashboard')}
      addCartHandler={() => addCartHandler(productData)}
    />
  );
};

export default ProductDetail;
