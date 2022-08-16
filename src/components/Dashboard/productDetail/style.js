import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  headerContainer: {
    width: wp(100),
    height: hp(60),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  backIcon: {
    height: hp(4.3),
    width: hp(6),
    marginVertical: hp(3),
    marginLeft: wp(5),
  },
  favoriteIcon: {
    height: hp(4.3),
    width: hp(4.3),
    marginVertical: hp(3),
    marginRight: wp(5),
  },
  textContainer: {
    width: wp(92),
    height: hp(40),
  },
  headerTextBox: {
    marginTop: hp(4),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontFamily: 'RobotoCondensed-Bold',
    fontSize: wp(5.5),
    padding: wp(1),
    letterSpacing: wp(0.1),
  },
  detailPara: {
    fontFamily: 'RobotoCondensed-Regular',
    fontSize: wp(4.3),
    letterSpacing: wp(0.1),
    marginTop: hp(2),
    padding: wp(1),
  },
  btn: {
    width: wp(92),
    justifyContent: 'center',
    alignItems: 'center',
    padding: wp(3.5),
    borderRadius: wp(3),
    backgroundColor: '#01D201',
    position: 'absolute',
    top: hp(28),
  },
  btnText: {
    fontFamily: 'RobotoCondensed-Bold',
    letterSpacing: wp(0.1),
    fontSize: wp(5),
  },
});

export default styles;
