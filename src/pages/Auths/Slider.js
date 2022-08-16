import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Skip = ({...props}) => (
  <TouchableOpacity {...props} activeOpacity={0.8}>
    <Text
      style={{
        color: '#000',
        fontSize: hp(2.4),
        marginLeft: wp(5),
        fontFamily: 'RobotoCondensed-Regular',
      }}>
      Skip
    </Text>
  </TouchableOpacity>
);

const Next = ({...props}) => (
  <TouchableOpacity {...props} activeOpacity={0.8}>
    <Text
      style={{
        color: '#000',
        fontSize: hp(2.4),
        marginRight: wp(5),
        fontFamily: 'RobotoCondensed-Regular',
      }}>
      Next
    </Text>
  </TouchableOpacity>
);

const Done = ({...props}) => (
  <TouchableOpacity {...props} activeOpacity={0.8}>
    <Text
      style={{
        color: '#000',
        fontSize: hp(2.4),
        marginRight: wp(5),
        fontFamily: 'RobotoCondensed-Regular',
      }}>
      Done
    </Text>
  </TouchableOpacity>
);

const Dots = ({selected}) => {
  let backgroundColor;
  backgroundColor = selected ? 'rgba(0,0,0,0.7)' : 'rgba(0,0,0,0.2)';
  return (
    <View
      style={{
        width: wp(2),
        height: wp(2),
        borderRadius: wp(2),
        marginHorizontal: 4,
        backgroundColor,
      }}
    />
  );
};
const Slider = ({navigation}) => {
  return (
    <Onboarding
      onSkip={() => navigation.replace('Login')}
      onDone={() => navigation.replace('Login')}
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      DoneButtonComponent={Done}
      DotComponent={Dots}
      pages={[
        {
          backgroundColor: '#FFCC59',
          image: (
            <Image
              style={{
                width: wp(100),
                height: wp(100),
              }}
              source={require('../../../assets/images/Shopping.png')}
            />
          ),
          title: 'ONLINE SHOPPING',
          subtitle: 'It is now very easy to reach the best quality among all',
          titleStyles: {
            color: '#000',
            fontSize: wp(9),
            fontFamily: 'RobotoCondensed-Bold',
          },
          subTitleStyles: {
            color: '#000',
            marginBottom: hp(8.5),
            width: wp(70),
            fontSize: wp(4.3),
            fontFamily: 'RobotoCondensed-Regular',
          },
        },
        {
          backgroundColor: '#BFEAF5',
          image: (
            <Image
              style={{width: wp(100), height: wp(100)}}
              source={require('../../../assets/images/addCart.png')}
            />
          ),
          title: 'ADD TO CART',
          subtitle: 'It is now very easy to reach the best quality among all',
          titleStyles: {
            color: '#000',
            fontSize: wp(9),
            fontFamily: 'RobotoCondensed-Bold',
          },
          subTitleStyles: {
            color: '#000',
            marginBottom: hp(8.5),
            width: wp(70),
            fontSize: wp(4.3),
            fontFamily: 'RobotoCondensed-Regular',
          },
        },
        {
          backgroundColor: '#91FF77',
          image: (
            <Image
              style={{width: wp(100), height: wp(100)}}
              source={require('../../../assets/images/OrderComplete.png')}
            />
          ),
          title: 'ORDER COMPLETE',
          subtitle: 'It is now very easy to reach the best quality among all',
          titleStyles: {
            color: '#000',
            fontSize: wp(9),
            fontFamily: 'RobotoCondensed-Bold',
          },
          subTitleStyles: {
            color: '#000',
            marginBottom: hp(8.5),
            width: wp(70),
            fontSize: wp(4.3),
            fontFamily: 'RobotoCondensed-Regular',
          },
        },
      ]}
    />
  );
};

export default Slider;
