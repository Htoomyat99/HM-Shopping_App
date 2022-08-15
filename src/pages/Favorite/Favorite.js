import {View, Text} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useSelector} from 'react-redux';

//components
import FavoriteContent from '../../components/Favorite/FavoriteContent';
import {AuthContext} from '../../context/context';
import {useLocal} from '../../hook/useLocal';

//icons
import FavoriteIcon from '../../../assets/icons/FavoriteIcon';

const Favorite = () => {
  const local = useLocal();
  const {darkMode} = useContext(AuthContext);

  const cartList = useSelector(state => state.favoriteList.favorite);

  if (cartList) {
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
        <FavoriteContent data={cartList} />
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
        <FavoriteIcon width={hp(8)} height={hp(8)} inColor="#ddd" />
        <Text
          style={{
            fontFamily: 'RobotoCondensed-Light',
            fontSize: wp(6),
            color: darkMode ? '#fff' : '#ddd',
            marginTop: hp(2),
          }}>
          {local.NoFavorite}
        </Text>
      </View>
    );
  }
};

export default Favorite;
