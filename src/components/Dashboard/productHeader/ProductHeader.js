import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
} from 'react-native';
import React, {useContext} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Carousel from 'react-native-snap-carousel-v4';

//style
import styles from './style';

//components
import {useLocal} from '../../../hook/useLocal';
import {AuthContext} from '../../../context/context';
import {SliderData} from '../../../data/data';
import BannerSlider from '../Slider/BannerSlider';

//icons
import SearchIcon from '../../../../assets/icons/SearchIcon';

const ProductHeader = props => {
  const local = useLocal();
  const {darkMode} = useContext(AuthContext);

  const internalStyles = StyleSheet.create({
    container: {
      backgroundColor: darkMode ? '#222' : '#fff',
    },
    quoteText: {
      color: darkMode ? '#fff' : '#8e8e8e',
    },
    bannerText: {
      color: darkMode ? '#fff' : '#8e8e8e',
    },
    SearchBarContainer: {
      borderColor: darkMode ? '#fff' : '#2FF500',
    },
  });

  const renderBanner = ({item, index}) => {
    return <BannerSlider data={item} />;
  };

  return (
    <View style={{...styles.container, ...internalStyles.container}}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>HM_Shopping</Text>
        <TouchableOpacity onPress={props.openDrawer}>
          <Image
            style={styles.image}
            source={require('../../../../assets/images/profileImg.jpg')}
          />
        </TouchableOpacity>
      </View>
      <Text style={{...styles.quoteText, ...internalStyles.quoteText}}>
        {local.HeaderQuote}
      </Text>
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
          style={styles.searchBar}
          placeholderTextColor={darkMode ? '#fff' : '#8e8e8e'}
        />
      </View>
      <Text style={{...styles.bannerText, ...internalStyles.bannerText}}>
        {local.Upcoming}
      </Text>
      <Carousel
        data={SliderData}
        renderItem={renderBanner}
        sliderWidth={wp(100)}
        itemWidth={wp(80)}
        loop={true}
      />
    </View>
  );
};

export default ProductHeader;
