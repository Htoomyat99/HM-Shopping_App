import {View, Text, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';

//components
import {AuthContext} from '../../context/context';
import language from '../../data/language';
import {useLocal} from '../../hook/useLocal';
import {appStorage} from '../../utils/appStorage';

const Setting = () => {
  const local = useLocal();
  const {getLang, lang} = useContext(AuthContext);

  const languageAction = value => {
    appStorage.setItem('@language', value);
    getLang(value);
  };

  return (
    <View>
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
