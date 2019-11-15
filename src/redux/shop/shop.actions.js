import * as actionTypes from './shop.action-types';

export const updateCollections = (collectionsMap) => ({
  type: actionTypes.UPDATE_COLLECTIONS,
  payload: collectionsMap
});
