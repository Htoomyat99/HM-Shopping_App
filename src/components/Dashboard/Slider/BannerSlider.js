import {View, Text, Image} from 'react-native';
import React from 'react';

//styles
import styles from './style';

const BannerSlider = ({data}) => {
  return (
    <View style={styles.container}>
      <Image source={data.image} style={styles.image} />
    </View>
  );
};

export default BannerSlider;
