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
    backgroundColor: '#2FF500',
    flexDirection: 'row',
    alignItems: 'center',
    width: wp(100),
    height: hp(7.5),
  },
  headerContainerText: {
    fontFamily: 'RobotoCondensed-Bold',
    fontSize: wp(4.5),
    marginLeft: wp(30),
  },
  backIcon: {
    marginLeft: wp(3),
    padding: wp(2),
  },
});

export default styles;
