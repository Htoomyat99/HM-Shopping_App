import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';

const Skip = ({...props}) => (
  <TouchableOpacity {...props} activeOpacity={0.8}>
    <Text style={{color: '#000', fontSize: 16.5, marginLeft: 15}}>Skip</Text>
  </TouchableOpacity>
);

const Next = ({...props}) => (
  <TouchableOpacity {...props} activeOpacity={0.8}>
    <Text style={{color: '#000', fontSize: 16.5, marginRight: 15}}>Next</Text>
  </TouchableOpacity>
);

const Done = ({...props}) => (
  <TouchableOpacity {...props} activeOpacity={0.8}>
    <Text style={{color: '#', fontSize: 16.5, marginRight: 15}}>Done</Text>
  </TouchableOpacity>
);

const Dots = ({selected}) => {
  let backgroundColor;
  backgroundColor = selected ? 'rgba(0,0,0,0.6)' : 'rgba(0,0,0,0.3)';
  return (
    <View
      style={{
        width: 35,
        height: 3,
        marginHorizontal: 3,
        backgroundColor,
      }}
    />
  );
};
const Slider = ({navigation}) => {
  return (
    <Onboarding
      onSkip={() => navigation.replace('Home')}
      onDone={() => navigation.navigate('Home')}
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      DoneButtonComponent={Done}
      DotComponent={Dots}
      pages={[
        {
          backgroundColor: 'red',
          image: (
            <Image
              resizeMode="contain"
              style={{width: 350, height: 350}}
              source={require('../../assets/images/luffy.png')}
            />
          ),
          title: 'Page 1',
          subtitle: 'Done with React Native Onboarding Swiper',
          titleStyles: {color: '#000'},
          subTitleStyles: {color: '#000'},
        },
        {
          backgroundColor: 'green',
          image: (
            <Image
              resizeMode="contain"
              style={{width: 350, height: 350}}
              source={require('../../assets/images/zoro.png')}
            />
          ),
          title: 'Page 2',
          subtitle: 'Done with React Native Onboarding Swiper',
          titleStyles: {color: '#000'},
          subTitleStyles: {color: '#000'},
        },
        {
          backgroundColor: 'yellow',
          image: (
            <Image
              resizeMode="contain"
              style={{width: 350, height: 350}}
              source={require('../../assets/images/sanji.png')}
            />
          ),
          title: 'Page 3',
          subtitle: 'Done with React Native Onboarding Swiper',
          titleStyles: {color: '#000'},
          subTitleStyles: {color: '#000'},
        },
      ]}
    />
  );
};

export default Slider;
