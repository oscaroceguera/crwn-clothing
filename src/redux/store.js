import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
import createSagaMiddleware from 'redux-saga'

import {fetchCollectionsStart} from './shop/shop.saga'

import rootReducer from "./root-reducer";

const sagaMiddleWare = createSagaMiddleware()

const middlewares = [sagaMiddleWare];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleWare.run(fetchCollectionsStart)

export const persistor = persistStore(store);

export default { store, persistor };
