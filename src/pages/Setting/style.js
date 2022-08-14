import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  language: {
    fontFamily: 'RobotoCondensed-Bold',
    fontSize: wp(5.5),
    marginTop: hp(3),
    marginLeft: wp(6),
    marginBottom: hp(2),
  },
  langBox: {
    marginTop: hp(0.5),
    marginLeft: wp(5),
    padding: wp(2),
    width: wp(90),
    borderColor: '#2FF500',
    borderWidth: wp(0.2),
    borderRadius: wp(3),
  },
  lang: {
    padding: wp(0.8),
  },
});

export default styles;
