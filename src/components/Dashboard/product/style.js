import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  image: {
    resizeMode: 'contain',
    width: wp(44),
    height: hp(25),
    marginVertical: wp(2),
    marginHorizontal: wp(2),
    borderRadius: wp(5),
    overflow: 'hidden',
  },
  container: {
    position: 'absolute',
    top: wp(35),
    left: hp(3),
  },
  text: {
    fontFamily: 'RobotoCondensed-Regular',
    letterSpacing: wp(0.1),
    fontSize: wp(4.5),
    color: '#f7f7f7',
  },
});

export default styles;
