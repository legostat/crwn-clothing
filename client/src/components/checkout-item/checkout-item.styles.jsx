import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const TextContainer = styled.div`
  width: 23%;
`;

export const QuantityContainer = styled(TextContainer)`
  display: flex;
`;

export const ArrowBtn = styled.button`
  cursor: pointer;
  font-family: inherit;
  font-weight: inherit;
  border: none;
  background: none;
  outline: none;
  padding: 0;
`;

export const ValueContainer = styled.span`
  margin: 0 10px;
`;

export const RemoveContainer = styled.div`
  padding-left: 12px;
`;

export const RemoveBtn = styled.button`
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
  font: inherit;
`;
