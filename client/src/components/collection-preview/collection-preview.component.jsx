import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import {
  CollectionPreviewContainer,
  CollectionPreviewTitle,
  PreviewContainer
} from './collection-preview.styles';

const CollectionPreview = ({ title, items, routeName }) => (
  <CollectionPreviewContainer>
    <CollectionPreviewTitle to={`/shop/${routeName}`}>
      {title}
    </CollectionPreviewTitle>
    <PreviewContainer>
      {items.slice(0, 4).map((item) => (
        <CollectionItem key={item.id} item={item} />
      ))}
    </PreviewContainer>
  </CollectionPreviewContainer>
);

export default CollectionPreview;
