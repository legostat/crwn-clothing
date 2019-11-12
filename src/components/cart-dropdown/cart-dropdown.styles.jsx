import styled from 'styled-components';

export const CartDropdownContainer = styled.div`
  background-color: white;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  height: 340px;
  padding: 20px;
  position: absolute;
  right: 40px;
  top: 90px;
  width: 240px;
  z-index: 5;

  button {
    margin-top: auto;
  }
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 240px;
  overflow: auto;
`;
