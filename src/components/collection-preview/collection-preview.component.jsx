import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import {
  CollectionPreviewContainer,
  CollectionPreviewTitle,
  PreviewContainer
} from './collection-preview.styles';

const CollectionPreview = ({ title, items }) => (
  <CollectionPreviewContainer>
    <CollectionPreviewTitle>{title}</CollectionPreviewTitle>
    <PreviewContainer>
      {items.slice(0, 4).map((item) => (
        <CollectionItem key={item.id} item={item} />
      ))}
    </PreviewContainer>
  </CollectionPreviewContainer>
);

export default CollectionPreview;
