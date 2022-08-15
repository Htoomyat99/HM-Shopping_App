import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
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
  BodyContainer: {
    width: wp(100),
    height: hp(92.5),
    alignItems: 'center',
  },
  image: {
    width: wp(30),
    height: wp(30),
    marginTop: hp(5),
    borderRadius: wp(15),
  },
  modalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp(5),
  },
  input: {
    borderColor: '#2FF500',
    borderBottomWidth: wp(0.2),
    height: wp(10),
    width: wp(42),
    padding: wp(1),
  },
  submit: {
    fontFamily: 'RobotoCondensed-Regular',
    padding: wp(1),
    borderWidth: wp(0.1),
    borderColor: '#2FF500',
    marginLeft: wp(2),
  },
  nameBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp(5),
    padding: wp(1),
  },
  name: {
    fontFamily: 'RobotoCondensed-Bold',
    fontSize: wp(6),
    borderBottomWidth: wp(0.2),
    borderBottomColor: '#2FF500',
    width: wp(40),
  },
  editText: {
    fontFamily: 'RobotoCondensed-Regular',
    paddingVertical: wp(1),
    paddingHorizontal: wp(2.2),
    borderWidth: wp(0.1),
    borderColor: '#2FF500',
    marginLeft: wp(2),
  },
  emailContainer: {
    marginTop: hp(1),
    width: wp(42),
    marginRight: wp(10),
    marginBottom: hp(5),
  },
  email: {
    fontFamily: 'RobotoCondensed-Bold',
    fontSize: wp(5.5),
    borderBottomWidth: wp(0.2),
    borderColor: '#2FF500',
  },
  container: {
    flexDirection: 'row',
    width: wp(85),
    alignItems: 'center',
    padding: wp(5),
    borderColor: '#2FF500',
    borderWidth: wp(0.2),
    borderRadius: wp(3),
    marginTop: hp(2),
  },
  containerText: {
    fontFamily: 'RobotoCondensed-Regular',
    fontSize: wp(5),
    marginLeft: wp(4),
  },
  logOutBtn: {
    marginTop: hp(6),
    paddingHorizontal: wp(5),
    paddingVertical: wp(2.5),
    borderRadius: wp(3),
    backgroundColor: '#2FF500',
  },
  logOutText: {
    fontFamily: 'RobotoCondensed-Regular',
    fontSize: wp(5),
  },
});

export default styles;
