import {ADD_FAVORITE, REMOVE_FAVORITE} from '../type';

const initialState = {
  favoriteItem: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      let favoriteId = action.favorite.id;
      let updateFavorite;

      if (state.favoriteItem[favoriteId]) {
        const newFavorite = {
          id: favoriteId,
          quantity: state.favoriteItem[favoriteId].quantity,
          name: action.favorite.name,
          currency: action.favorite.currency,
          price: state.favoriteItem[favoriteId].price,
          image: action.favorite.image,
        };

        updateFavorite = {...state.favoriteItem, [favoriteId]: newFavorite};
      } else {
        updateFavorite = {...state.favoriteItem, [favoriteId]: action.favorite};
      }
      return {
        favoriteItem: updateFavorite,
      };

    case REMOVE_FAVORITE:
      let removeData = action.removeFavorite;
      let removeid = removeData.id;
      let currentQty = removeData.quantity;
      let updatedFavorite;

      if (currentQty > 1) {
        let updateFavoriteList = {
          id: removeid,
          quantity: state.favoriteItem[removeid].quantity,
          name: removeData.name,
          currency: removeData.currency,
          price: state.favoriteItem[removeid].price,
          image: removeData.image,
        };

        updatedFavorite = {
          ...state.favoriteItem,
          [removeid]: updateFavoriteList,
        };
      } else {
        updatedFavorite = {...state.favoriteItem};
        delete updatedFavorite[removeid];
      }
      return {
        favoriteItem: updatedFavorite,
      };

    default:
      return {favoriteItem: state.favoriteItem};
  }
};
