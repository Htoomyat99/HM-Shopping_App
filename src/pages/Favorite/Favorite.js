import {View, Text} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useSelector, useDispatch} from 'react-redux';

//components
import FavoriteContent from '../../components/Favorite/FavoriteContent';
import {AuthContext} from '../../context/context';
import {useLocal} from '../../hook/useLocal';
import * as actionFavorite from '../../store/action/favorite';

//icons
import FavoriteIcon from '../../../assets/icons/FavoriteIcon';

const Favorite = () => {
  const dispatch = useDispatch();
  const local = useLocal();
  const {darkMode} = useContext(AuthContext);

  const favoriteList = useSelector(state => {
    let favoriteData = state.favoriteList.favoriteItem;
    let updateFavoriteList = [];
    for (const key in favoriteData) {
      updateFavoriteList.push({
        id: favoriteData[key].id,
        quantity: favoriteData[key].quantity,
        name: favoriteData[key].name,
        currency: favoriteData[key].currency,
        price: favoriteData[key].price,
        image: favoriteData[key].image,
      });
    }
    return updateFavoriteList;
  });

  const deleteHandler = value => {
    dispatch(actionFavorite.removeFavorite(value));
  };

  if (favoriteList.length) {
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
          {local.Favorite}
        </Text>
        <FavoriteContent data={favoriteList} deleteHandler={deleteHandler} />
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
