import ShopActionsTypes from './shop.types'
import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/firebase.utils";

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

// export const fetchCollectionsStartAsync = () => {
//   return dispatch => {
//      const collectionRef = firestore.collection("collections");

//      dispatch(fetchCollectionsStart())

//      collectionRef.get().then(snapshot => {
//        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
//        dispatch(fetchCollectionsSuccess(collectionsMap));
//      })
//      .catch(error => dispatch(fetchCollectionsFailure(error)));
//   }
// }

