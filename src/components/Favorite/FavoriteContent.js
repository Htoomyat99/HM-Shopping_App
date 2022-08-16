import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useEffect, useContext} from 'react';

//styles;
import styles from './style';

//components
import {AuthContext} from '../../context/context';

//icons
import CrossIcon from '../../../assets/icons/CrossIcon';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const FavoriteContent = props => {
  const {darkMode} = useContext(AuthContext);
  const internalStyles = StyleSheet.create({
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
        </View>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => props.deleteHandler(item)}>
          <CrossIcon
            width={wp(6)}
            height={wp(6)}
            Color={darkMode ? '#fff' : '#8e8e8e'}
          />
        </TouchableOpacity>
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

export default FavoriteContent;
