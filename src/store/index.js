import {createStore, applyMiddleware, combineReducers} from 'redux';
import ReduxThunk from 'redux-thunk';

import CartReducer from './reducer/cart';
import FavoriteReducer from './reducer/favorite';

const rootReducer = combineReducers({
  cartList: CartReducer,
  favoriteList: FavoriteReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default store;
