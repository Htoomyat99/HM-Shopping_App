import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    marginBottom: hp(2),
  },
  image: {
    resizeMode: 'contain',
    height: hp(18),
    width: wp(75),
    borderRadius: wp(4),
  },
});

export default styles;
