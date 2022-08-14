import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useEffect, useContext} from 'react';

//styles
import styles from './style';
import {
  heightPercentageToDP as wp,
  widthPercentageToDP as hp,
} from 'react-native-responsive-screen';

//components
import {AuthContext} from '../../context/context';

const CartContent = props => {
  const {darkMode} = useContext(AuthContext);
  const internalStyles = StyleSheet.create({
    container: {
      borderColor: darkMode ? '#ddd' : '#2FF500',
    },
    name: {
      color: darkMode ? '#fff' : '#8e8e8e',
    },
    price: {
      color: darkMode ? '#fff' : '#8e8e8e',
    },
    minusIcon: {
      borderColor: darkMode ? '#fff' : '#8e8e8e',
    },
    plusIcon: {
      borderColor: darkMode ? '#fff' : '#8e8e8e',
    },
    minus: {
      color: darkMode ? '#fff' : '#8e8e8e',
    },
    plus: {
      color: darkMode ? '#fff' : '#8e8e8e',
    },
    quantity: {
      color: darkMode ? '#fff' : '#8e8e8e',
    },
  });

  const renderItem = ({item}) => {
    return (
      <View style={{...styles.container, ...internalStyles.container}}>
        <View>
          <Image source={item.image} style={styles.image} />
        </View>
        <View style={styles.textContainer}>
          <Text style={{...styles.name, ...internalStyles.name}}>
            {item.name}
          </Text>
          <Text style={{...styles.price, ...internalStyles.price}}>
            {item.price} {item.currency}
          </Text>
          <View style={styles.iconContainer}>
            <TouchableOpacity
              onPress={() => props.minusHandler(item)}
              style={{...styles.minusIcon, ...internalStyles.minusIcon}}>
              <Text style={{...styles.minus, ...internalStyles.minus}}>-</Text>
            </TouchableOpacity>
            <Text style={{...styles.quantity, ...internalStyles.quantity}}>
              x {item.quantity}
            </Text>
            <TouchableOpacity
              onPress={() => props.addHandler(item)}
              style={{...styles.plusIcon, ...internalStyles.plusIcon}}>
              <Text style={{...styles.plus, ...internalStyles.plus}}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  return (
    <FlatList
      data={props.data}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      keyExtractor={item => item.id}
    />
  );
};

export default CartContent;
