import React, {useContext} from 'react';

//components
import {AuthContext} from '../context/context';
import en from '../components/helper/en';
import mm from '../components/helper/mm';

export const useLocal = () => {
  const {lang} = useContext(AuthContext);
  if (lang === 'mm') {
    return mm;
  } else {
    return en;
  }
};
