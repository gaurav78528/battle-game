import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore,
} from "redux";
import thunk from "redux-thunk";

import { reducer } from "./AuthReducer/reducer";
const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

const store = legacy_createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
);

export { store };
