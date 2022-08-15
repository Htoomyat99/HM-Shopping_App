import {ADD_FAVORITE, REMOVE_FAVORITE} from '../type';

const initialState = {
  favorite: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return {...state, favorite: action.favorite};

    default:
      return {...state, favorite: state.favorite};
  }
};
