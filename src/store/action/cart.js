import {ADD_TO_CART, REMOVE_FROM_CART} from '../type';

export const addToCart = data => {
  return {
    type: ADD_TO_CART,
    cart: data,
  };
};

export const removeCart = data => {
  return {
    type: REMOVE_FROM_CART,
    removeCart: data,
  };
};
