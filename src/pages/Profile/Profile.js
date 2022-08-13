import {View, Text, TouchableOpacity} from 'react-native';
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

const Profile = ({navigation}) => {
  const local = useLocal();
  const {darkMode} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backIcon}>
          <BackIcon width={wp(7)} height={wp(7)} Color="#444" />
        </TouchableOpacity>
        <Text style={styles.headerContainerText}>{local.Profile}</Text>
      </View>
    </View>
  );
};

export default Profile;
