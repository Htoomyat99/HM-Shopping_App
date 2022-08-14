import {View, Text, ToastAndroid} from 'react-native';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';

//components
import ProductDetailScreen from '../../components/Dashboard/productDetail/ProductDetailScreen';
import * as actionCart from '../../store/action/cart';
import {useLocal} from '../../hook/useLocal';

const ProductDetail = ({navigation, route}) => {
  const {productData} = route.params;
  const dispatch = useDispatch();
  const local = useLocal();

  const addCartHandler = value => {
    dispatch(actionCart.addToCart(value));
    ToastAndroid.show(local.SuccessAdd, ToastAndroid.SHORT);
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
