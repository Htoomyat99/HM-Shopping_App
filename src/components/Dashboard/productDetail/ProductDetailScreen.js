import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import React, {useContext} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//styles
import styles from './style';

//components
import {AuthContext} from '../../../context/context';
import {useLocal} from '../../../hook/useLocal';

//icons
import BackIcon from '../../../../assets/icons/BackIcon';
import FavoriteIcon from '../../../../assets/icons/FavoriteIcon';

const ProductDetailScreen = props => {
  const local = useLocal();
  const {darkMode} = useContext(AuthContext);

  const internalStyle = StyleSheet.create({
    container: {
      backgroundColor: darkMode ? '#222' : '#fff',
    },
    headerText: {
      color: darkMode ? '#fff' : '#8e8e8e',
    },
    detailPara: {
      color: darkMode ? '#fff' : '#8e8e8e',
    },
  });

  return (
    <View style={{...styles.container, ...internalStyle.container}}>
      <ImageBackground
        resizeMode="stretch"
        source={props.data.image}
        style={styles.headerContainer}>
        <TouchableOpacity onPress={props.backHandler} style={styles.backIcon}>
          <BackIcon width={wp(8)} height={wp(8)} Color="#000" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={props.favoriteHandler}
          style={styles.favoriteIcon}>
          <FavoriteIcon width={wp(8)} height={wp(8)} inColor="#fefefe" />
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.textContainer}>
        <View style={styles.headerTextBox}>
          <Text style={{...styles.headerText, ...internalStyle.headerText}}>
            {props.data.name}
          </Text>
          <Text style={{...styles.headerText, ...internalStyle.headerText}}>
            {props.data.price} {props.data.currency}
          </Text>
        </View>
        <Text style={{...styles.detailPara, ...internalStyle.detailPara}}>
          {props.data.detail}
        </Text>
        <TouchableOpacity style={styles.btn} onPress={props.addCartHandler}>
          <Text style={styles.btnText}>{local.AddCart}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductDetailScreen;
