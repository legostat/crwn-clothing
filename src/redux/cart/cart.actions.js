import actionTypes from './cart.action-types';

export const toggleCartHidden = () => ({
  type: actionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = (item) => ({
  type: actionTypes.ADD_ITEM,
  payload: item
});
