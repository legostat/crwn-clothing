import actionTypes from './cart.action-types';
import { addItemToCart, removeItemFromCart } from './cart.utils';

const initialState = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case actionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
    case actionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      };
    case actionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload.id
        )
      };
    case actionTypes.CLEAR_CART:
      return {
        ...state,
        cartItems: []
      };
    default:
      return state;
  }
};

export default cartReducer;
