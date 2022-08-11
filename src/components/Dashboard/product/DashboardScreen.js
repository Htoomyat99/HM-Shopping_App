import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
  ImageBackground,
} from 'react-native';
import React from 'react';

//styles
import styles from './style';

//components
import {productData} from '../../../data/data';

const DashboardScreen = props => {
  const renderProduct = ({item}) => {
    return (
      <TouchableOpacity activeOpacity={0.5} onPress={props.productHandler}>
        <Image source={item.image} style={styles.image} />
        <View style={styles.container}>
          <Text style={styles.text}>
            {item.price}
            {item.currency}
          </Text>
          <Text style={styles.text}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      numColumns={2}
      data={productData}
      style={{flexWrap: 'wrap'}}
      renderItem={renderProduct}
      keyExtractor={item => item.id}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default DashboardScreen;
