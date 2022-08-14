import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useContext} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import styles from './style';

//components
import {AuthContext} from '../../context/context';
import language from '../../data/language';
import {useLocal} from '../../hook/useLocal';
import {appStorage} from '../../utils/appStorage';

//icons
import BackIcon from '../../../assets/icons/BackIcon';

const Setting = ({navigation}) => {
  const local = useLocal();
  const {getLang, lang, darkMode} = useContext(AuthContext);

  const languageAction = value => {
    appStorage.setItem('@language', value);
    getLang(value);
  };

  const internalStyles = StyleSheet.create({
    container: {
      backgroundColor: darkMode ? '#222' : '#fff',
    },
    lang: {
      color: darkMode ? '#fff' : '#8e8e8e',
    },
  });

  return (
    <View style={{...styles.container, ...internalStyles.container}}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backIcon}>
          <BackIcon width={wp(7)} height={wp(7)} Color="#444" />
        </TouchableOpacity>
        <Text style={styles.headerContainerText}>{local.Setting}</Text>
      </View>

      <Text style={{...styles.language, ...internalStyles.lang}}>
        {local.language}
      </Text>
      <View style={styles.langBox}>
        {language.map(item => (
          <View key={item.id} style={styles.lang}>
            <TouchableOpacity onPress={() => languageAction(item.value)}>
              <Text
                style={[
                  {
                    color: lang === item.value ? 'blue' : '#8e8e8e',
                    fontFamily: 'RobotoCondensed-Bold',
                    fontSize: wp(4),
                  },
                ]}>
                {item.name}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Setting;
