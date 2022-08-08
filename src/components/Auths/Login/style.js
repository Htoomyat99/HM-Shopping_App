import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  bgImage: {
    width: wp(100),
    height: hp(100),
  },
  imageContainer: {
    height: hp(43),
    alignItems: 'center',
    borderBottomWidth: wp(0.2),
    borderBottomColor: '#ccc',
  },
  image: {
    width: wp(90),
    height: wp(90),
  },
  textContainer: {
    height: hp(57),
  },
  emailBox: {
    marginTop: hp(5),
    width: wp(85),
    alignSelf: 'center',
  },
  emailText: {
    fontFamily: 'RobotoCondensed-Regular',
    fontSize: wp(5),
    marginBottom: hp(0.8),
    color: '#000',
  },
  emailInput: {
    borderWidth: wp(0.3),
    borderRadius: wp(2),
    padding: wp(3),
    fontFamily: 'RobotoCondensed-Regular',
    fontSize: wp(4.5),
  },
  eyeOnBox: {
    position: 'absolute',
    top: hp(7),
    left: wp(76),
  },
  eyeOffBox: {
    position: 'absolute',
    top: hp(6.5),
    left: wp(76),
  },
  signInContainer: {
    marginTop: hp(7),
    width: wp(85),
    alignSelf: 'center',
  },
  signInBox: {
    backgroundColor: '#01D201',
    justifyContent: 'center',
    alignItems: 'center',
    padding: wp(3),
    borderRadius: wp(2),
  },
  signInText: {
    fontFamily: 'RobotoCondensed-Regular',
    fontSize: wp(6.3),
    color: '#fff',
  },
  footer: {
    width: wp(85),
    marginTop: wp(2),
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  footerText: {
    fontFamily: 'RobotoCondensed-Regular',
    fontSize: wp(4),
    marginHorizontal: wp(1),
  },
});

export default styles;
