import {ADD_TO_CART, REMOVE_FROM_CART} from '../type';

const initialState = {
  cartItems: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      let cartid = action.cart.id;
      let currentPrice = action.cart.price;
      let updateCartItem;
      let curentQty = action.cart.quantity;

      if (state.cartItems[cartid]) {
        const newCart = {
          id: cartid,
          quantity: state.cartItems[cartid].quantity + 1,
          name: action.cart.name,
          currency: action.cart.currency,
          price: state.cartItems[cartid].price + currentPrice,
          image: action.cart.image,
        };

        updateCartItem = {...state.cartItems, [cartid]: newCart};
      } else {
        updateCartItem = {...state.cartItems, [cartid]: action.cart};
      }
      return {
        cartItems: updateCartItem,
      };

    case REMOVE_FROM_CART:
      let removeData = action.removeCart;
      let removeid = removeData.id;
      let currentQty = removeData.quantity;
      let cuPrice = state.cartItems[removeid].price / currentQty;
      let updateCart;
      if (currentQty > 1) {
        let updateCartList = {
          id: removeid,
          quantity: state.cartItems[removeid].quantity - 1,
          name: removeData.name,
          currency: removeData.currency,
          price: state.cartItems[removeid].price - cuPrice,
          image: removeData.image,
        };

        updateCart = {...state.cartItems, [removeid]: updateCartList};
      } else {
        updateCart = {...state.cartItems};
        delete updateCart[removeid];
      }
      return {
        cartItems: updateCart,
      };
    default:
      return {cartItems: state.cartItems};
  }
};
