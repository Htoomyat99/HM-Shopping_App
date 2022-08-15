import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useEffect, useContext} from 'react';

styles;
import styles from './style';

//components
import {AuthContext} from '../../context/context';

const FavoriteContent = props => {
  const renderItem = ({item}) => {
    return (
      <View style={styles.container}>
        <View>
          <Text>{item.name}</Text>
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

export default FavoriteContent;
