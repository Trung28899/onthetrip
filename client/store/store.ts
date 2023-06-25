import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import authReducer, { AuthInterface } from "./reducers/authReducer";
import loadingReducer, { LoadingReducer } from "./reducers/loadingReducer";

const reducer = combineReducers({
  authObject: authReducer,
  loading: loadingReducer,
});

const rootReducer = configureStore({
  reducer: reducer,
  devTools: true,
});

export type RootState = {
  authObject: AuthInterface;
  loading: LoadingReducer;
};
export default rootReducer;
