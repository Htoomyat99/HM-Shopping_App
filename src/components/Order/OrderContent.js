import {View, Text} from 'react-native';
import React, {useContext} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//components
import {AuthContext} from '../../context/context';
import {useLocal} from '../../hook/useLocal';

//icons
import OrderIcon from '../../../assets/icons/OrderIcon';

const OrderContent = props => {
  const local = useLocal();
  const {darkMode} = useContext(AuthContext);
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: darkMode ? '#222' : '#fff',
      }}>
      <OrderIcon width={hp(8)} height={hp(8)} Color="#ddd" />
      <Text
        style={{
          fontFamily: 'RobotoCondensed-Light',
          fontSize: wp(6),
          color: darkMode ? '#fff' : '#ddd',
          marginTop: hp(2),
        }}>
        {local.NoOrder}
      </Text>
    </View>
  );
};

export default OrderContent;
