import React from 'react';
import { connect } from 'react-redux';

import { selectCartItems } from '../../redux/cart/cart.selectors';

import CustomButtom from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
    <CustomButtom>Go to checkout</CustomButtom>
  </div>
);

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);
