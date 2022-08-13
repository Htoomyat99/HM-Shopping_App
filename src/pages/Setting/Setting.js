import {View, Text, TouchableOpacity} from 'react-native';
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
  const {getLang, lang} = useContext(AuthContext);

  const languageAction = value => {
    appStorage.setItem('@language', value);
    getLang(value);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backIcon}>
          <BackIcon width={wp(7)} height={wp(7)} Color="#444" />
        </TouchableOpacity>
        <Text style={styles.headerContainerText}>{local.Setting}</Text>
      </View>
      <Text>{local.Setting}</Text>
      {language.map(item => (
        <View key={item.id}>
          <TouchableOpacity onPress={() => languageAction(item.value)}>
            <Text style={[{color: lang === item.value ? 'blue' : '#000'}]}>
              {item.name}
            </Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

export default Setting;
