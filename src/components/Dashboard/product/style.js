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
  SearchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: wp(92),
    paddingHorizontal: wp(3),
    paddingVertical: wp(0.5),
    borderWidth: wp(0.2),
    borderRadius: wp(2),
    position: 'absolute',
    top: hp(-33.5),
    marginLeft: wp(4),
  },
  searchBar: {
    width: wp(91),
    fontFamily: 'RobotoCondensed-Regular',
    fontSize: wp(5),
    marginLeft: hp(0.5),
  },
});

export default styles;
