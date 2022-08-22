import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useEffect, useContext} from 'react';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

//styles
import styles from './style';

//components
import {AuthContext} from '../../context/context';
import {useLocal} from '../../hook/useLocal';

const CartContent = props => {
  const local = useLocal();
  const {darkMode} = useContext(AuthContext);
  const internalStyles = StyleSheet.create({
    container: {
      borderColor: darkMode ? '#ddd' : '#2FF500',
    },
    name: {
      color: darkMode ? '#fff' : '#8e8e8e',
    },
  });

  const renderItem = ({item}) => {
    return (
      <View style={styles.container}>
        <View>
          <Image source={item.image} style={styles.image} />
        </View>
        <View style={styles.textContainer}>
          <Text style={{...styles.name, ...internalStyles.name}}>
            {item.name}
          </Text>
          <Text style={{...styles.price, ...internalStyles.name}}>
            {item.price} {item.currency}
          </Text>
          <View style={styles.iconContainer}>
            <TouchableOpacity
              onPress={() => props.minusHandler(item)}
              style={{...styles.minusIcon, ...internalStyles.container}}>
              <Text style={{...styles.minus, ...internalStyles.name}}>-</Text>
            </TouchableOpacity>
            <Text style={{...styles.quantity, ...internalStyles.name}}>
              x {item.quantity}
            </Text>
            <TouchableOpacity
              onPress={() => props.addHandler(item)}
              style={{...styles.plusIcon, ...internalStyles.container}}>
              <Text style={{...styles.plus, ...internalStyles.name}}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={props.data}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
      />
      <TouchableOpacity
        onPress={props.OrderHandler}
        style={styles.orderContainer}>
        <Text style={styles.orderText}>{local.OrderNow}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CartContent;
