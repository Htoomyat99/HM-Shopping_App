import {MMKV} from 'react-native-mmkv-storage';

export const storage = new MMKV();

export const appStorage = {
  setItem: (key, value) => {
    try {
      storage.set(key, value);
    } catch (error) {
      console.log(error);
    }
  },

  getItem: key => {
    try {
      return storage.getString(key);
    } catch (error) {
      console.log(error);
    }
  },

  removeItem: key => {
    try {
      storage.delete(key);
    } catch (error) {
      console.log(error);
    }
  },
};
