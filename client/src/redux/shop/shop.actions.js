import ShopActionsTypes from './shop.types'


export const fetchCollectionsStart = () => ({
  type: ShopActionsTypes.FETCH_COLLECTIONS_START,
})

export const fetchCollectionsSuccess = collectionMap => ({
  type: ShopActionsTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionMap
});

export const fetchCollectionsFailure = errorMsg => ({
  type: ShopActionsTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMsg
})
