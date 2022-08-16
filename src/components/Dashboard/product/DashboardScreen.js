import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
  TextInput,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import React, {useState, useEffect, useContext} from 'react';

//styles
import styles from './style';

//components
import {productData} from '../../../data/data';
import {AuthContext} from '../../../context/context';
import {useLocal} from '../../../hook/useLocal';

//icons
import SearchIcon from '../../../../assets/icons/SearchIcon';

const DashboardScreen = props => {
  const [filterData, setFilterData] = useState([]);
  const [masterData, setMasterData] = useState([]);
  const [search, setSearch] = useState('');

  const local = useLocal();
  const {darkMode} = useContext(AuthContext);

  useEffect(() => {
    setFilterData(productData);
    setMasterData(productData);
  }, []);

  const searchFilter = text => {
    if (text) {
      const newData = masterData.filter(item => {
        const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilterData(newData);
      setSearch(text);
    } else {
      setFilterData(masterData);
      setSearch(text);
    }
  };

  const internalStyles = StyleSheet.create({
    SearchBarContainer: {
      borderColor: darkMode ? '#fff' : '#2FF500',
    },
    searchBar: {
      color: darkMode ? '#fff' : '#8e8e8e',
    },
  });

  const renderProduct = ({item}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => props.productHandler(item)}>
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

  const ItemSeparatorView = () => {
    return <View />;
  };

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          ...styles.SearchBarContainer,
          ...internalStyles.SearchBarContainer,
        }}>
        <SearchIcon
          width={wp(5)}
          height={wp(5)}
          outColor={darkMode ? '#fff' : '#8e8e8e'}
        />
        <TextInput
          placeholder={local.Search}
          style={{...styles.searchBar, ...internalStyles.searchBar}}
          placeholderTextColor={darkMode ? '#fff' : '#8e8e8e'}
          value={search}
          onChangeText={text => searchFilter(text)}
        />
      </View>
      <FlatList
        numColumns={2}
        data={filterData}
        style={{flexWrap: 'wrap'}}
        ItemSeparatorComponent={ItemSeparatorView}
        renderItem={renderProduct}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default DashboardScreen;
