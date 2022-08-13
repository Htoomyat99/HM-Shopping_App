import {createStore, applyMiddleware, combineReducers} from 'redux';
import ReduxThunk from 'redux-thunk';

import CartReducer from './reducer/cart';

const rootReducer = combineReducers({
  cartList: CartReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default store;
