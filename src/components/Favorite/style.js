import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    width: wp(90),
    marginTop: hp(3),
    flexDirection: 'row',
    borderRadius: wp(3),
    borderWidth: wp(0.3),
    borderColor: '#2FF500',
  },
  image: {
    resizeMode: 'stretch',
    width: wp(28),
    height: wp(28),
    borderRadius: wp(3),
  },
});

export default styles;
