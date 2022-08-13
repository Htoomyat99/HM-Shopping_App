import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  scrollContainer: {
    marginHorizontal: wp(4),
  },

  headerText: {
    width: wp(92),
    fontFamily: 'RobotoCondensed-Bold',
    fontSize: wp(5),
    letterSpacing: wp(0.1),
    marginTop: wp(1),
  },
  paraText: {
    marginTop: hp(2),
    width: wp(92),
    fontFamily: 'RobotoCondensed-Regular',
    letterSpacing: wp(0.1),
    textAlign: 'justify',
    fontSize: wp(3.8),
    marginBottom: wp(3),
  },
});

export default styles;
