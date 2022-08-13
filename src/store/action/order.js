import {ADD_ORDER} from '../type';

export const addOrder = data => {
  return {
    type: ADD_ORDER,
    order: data,
  };
};
