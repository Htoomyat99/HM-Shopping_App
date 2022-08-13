import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useContext} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import styles from './style';

//components
import {AuthContext} from '../../context/context';
import {useLocal} from '../../hook/useLocal';

//icons
import BackIcon from '../../../assets/icons/BackIcon';

const Terms = ({navigation}) => {
  const local = useLocal();
  const {darkMode} = useContext(AuthContext);

  const internalStyle = StyleSheet.create({
    container: {
      backgroundColor: darkMode ? '#222' : '#fff',
    },
    headerText: {
      color: darkMode ? '#fff' : '#000',
    },
    paraText: {
      color: darkMode ? '#fff' : '#8e8e8e',
    },
  });
  return (
    <View style={{...styles.container, ...internalStyle.container}}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backIcon}>
          <BackIcon width={wp(7)} height={wp(7)} Color="#444" />
        </TouchableOpacity>
        <Text style={styles.headerContainerText}>{local.Terms}</Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollContainer}>
        <Text style={{...styles.headerText, ...internalStyle.headerText}}>
          {local.Aggrement}
        </Text>
        <Text style={{...styles.paraText, ...internalStyle.paraText}}>
          {local.AggrementPara}
        </Text>
        <Text style={{...styles.headerText, ...internalStyle.headerText}}>
          {local.Shopping}
        </Text>
        <Text style={{...styles.paraText, ...internalStyle.paraText}}>
          {local.ShoppingPara}
        </Text>
        <Text style={{...styles.headerText, ...internalStyle.headerText}}>
          {local.Representation}
        </Text>
        <Text style={{...styles.paraText, ...internalStyle.paraText}}>
          {local.RepresentationPara}
        </Text>
        <Text style={{...styles.headerText, ...internalStyle.headerText}}>
          {local.Governing}
        </Text>
        <Text style={{...styles.paraText, ...internalStyle.paraText}}>
          {local.GoverningPara}
        </Text>
        <Text style={{...styles.headerText, ...internalStyle.headerText}}>
          {local.Assignment}
        </Text>
        <Text style={{...styles.paraText, ...internalStyle.paraText}}>
          {local.AssignmentPara}
        </Text>
        <Text style={{...styles.headerText, ...internalStyle.headerText}}>
          {local.Severability}
        </Text>
        <Text style={{...styles.paraText, ...internalStyle.paraText}}>
          {local.ServerPara}
        </Text>
        <Text style={{...styles.headerText, ...internalStyle.headerText}}>
          {local.Survival}
        </Text>
        <Text style={{...styles.paraText, ...internalStyle.paraText}}>
          {local.SurvivalPara}
        </Text>
      </ScrollView>
    </View>
  );
};

export default Terms;
