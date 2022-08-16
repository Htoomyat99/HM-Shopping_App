import {View, Text, ToastAndroid} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useSelector, useDispatch} from 'react-redux';

//components
import CartContent from '../../components/Cart/CartContent';
import {AuthContext} from '../../context/context';
import {useLocal} from '../../hook/useLocal';
import * as actionCart from '../../store/action/cart';

//icons
import CartIcon from '../../../assets/icons/CartIcon';

const Cart = () => {
  const local = useLocal();
  const {darkMode} = useContext(AuthContext);
  const dispatch = useDispatch();

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

  const addHandler = value => {
    dispatch(actionCart.addToCart(value));
  };

  const minusHandler = data => {
    dispatch(actionCart.removeCart(data));
  };

  const OrderHandler = () => {
    ToastAndroid.show(local.NoService, ToastAndroid.SHORT);
  };

  if (cartList.length) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          backgroundColor: darkMode ? '#222' : '#fff',
        }}>
        <Text
          style={{
            fontFamily: 'RobotoCondensed-Bold',
            fontSize: wp(7),
            color: darkMode ? '#fff' : '#000',
            marginTop: hp(3),
          }}>
          {local.MyCart}
        </Text>
        <CartContent
          data={cartList}
          minusHandler={minusHandler}
          addHandler={addHandler}
          OrderHandler={OrderHandler}
        />
      </View>
    );
  } else {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: darkMode ? '#222' : '#fff',
        }}>
        <CartIcon
          width={hp(8)}
          height={hp(8)}
          inColor={darkMode ? '#222' : '#fff'}
          outColor={darkMode ? '#ddd' : '#ddd'}
        />
        <Text
          style={{
            fontFamily: 'RobotoCondensed-Light',
            fontSize: wp(6),
            color: darkMode ? '#fff' : '#ddd',
          }}>
          {local.EmptyCart}
        </Text>
      </View>
    );
  }
};

export default Cart;
