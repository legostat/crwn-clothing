import React from 'react';
import { connect } from 'react-redux';

import {
  clearItemFromCart,
  addItem,
  removeItem
} from '../../redux/cart/cart.actions';

import {
  CheckoutItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  ValueContainer,
  RemoveContainer,
  ArrowBtn,
  RemoveBtn
} from './checkout-item.styles';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt="item" />
      </ImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <ArrowBtn onClick={() => removeItem(cartItem)}>&#10094;</ArrowBtn>
        <ValueContainer>{quantity}</ValueContainer>
        <ArrowBtn onClick={() => addItem(cartItem)}>&#10095;</ArrowBtn>
      </QuantityContainer>
      <TextContainer>{price}</TextContainer>
      <RemoveContainer>
        <RemoveBtn onClick={() => clearItem(cartItem)}>&#10005;</RemoveBtn>
      </RemoveContainer>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CheckoutItem);
