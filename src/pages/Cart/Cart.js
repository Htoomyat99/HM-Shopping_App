import {View, Text} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

import CartContent from '../../components/Cart/CartContent';

const Cart = () => {
  const cartList = useSelector(state => {
    let cartData = state.cartList.cartItems;
    let updateCartList = [];
    for (const key in cartData) {
      updateCartList.push({
        id: cartData[key].id,
        quantity: cartData[key].quantity,
        name: cartData[key].name,
        currency: cartData[key].currency,
        price: cartData[key].price,
        image: cartData[key].image,
      });
    }
    return updateCartList;
  });

  return <CartContent data={cartList} />;
};

export default Cart;
