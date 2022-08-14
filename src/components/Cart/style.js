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
  textContainer: {
    marginLeft: wp(7),
  },
  name: {
    fontFamily: 'RobotoCondensed-Regular',
    fontSize: wp(5),
    letterSpacing: wp(0.1),
    marginVertical: wp(1),
  },
  price: {
    fontFamily: 'RobotoCondensed-Regular',
    fontSize: wp(4.5),
    letterSpacing: wp(0.1),
    marginBottom: wp(3),
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  minusIcon: {
    borderColor: '#000',
    borderWidth: wp(0.2),
    paddingHorizontal: wp(3),
    marginRight: wp(4),
  },
  minus: {
    fontSize: wp(5.5),
  },
  plusIcon: {
    borderColor: '#000',
    borderWidth: wp(0.2),
    paddingHorizontal: wp(2.5),
    marginRight: wp(4),
  },
  plus: {
    fontSize: wp(5.5),
  },

  quantity: {
    fontFamily: 'RobotoCondensed-Bold',
    fontSize: wp(5),
    marginRight: wp(5),
  },
});

export default styles;
