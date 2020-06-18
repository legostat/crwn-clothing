import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  @media screen and (max-width: 800px) {
    align-items: center;
  }
`;

export const CollectionPreviewTitle = styled(Link)`
  font-size: 28px;
  margin-bottom: 25px;
  text-transform: uppercase;
`;

export const PreviewContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
  }

  @media screen and (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;
