import {ADD_FAVORITE, REMOVE_FAVORITE} from '../type';

export const addFavorite = data => {
  return {
    type: ADD_FAVORITE,
    favorite: data,
  };
};

export const removeFavorite = data => {
  return {
    type: REMOVE_FAVORITE,
    removeFavorite: data,
  };
};
