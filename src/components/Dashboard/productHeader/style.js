import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: wp(100),
    height: hp(48),
  },
  image: {
    width: wp(8),
    height: wp(8),
    borderRadius: 20,
    marginLeft: wp(25),
  },
  headerContainer: {
    backgroundColor: '#2FF500',
    flexDirection: 'row',
    alignItems: 'center',
    width: wp(100),
    height: hp(7.5),
  },
  headerText: {
    fontFamily: 'RobotoCondensed-Bold',
    fontSize: wp(4.5),
    marginLeft: wp(35),
  },
  quoteText: {
    fontFamily: 'RobotoCondensed-Regular',
    fontSize: wp(6),
    letterSpacing: wp(0.1),
    marginTop: hp(1),
    width: wp(92),
    marginTop: hp(1),
  },
  bannerText: {
    width: wp(92),
    paddingVertical: wp(2),
    fontSize: wp(4.5),
    fontFamily: 'RobotoCondensed-Bold',
    marginBottom: hp(1),
    marginTop: hp(10),
  },
});

export default styles;
