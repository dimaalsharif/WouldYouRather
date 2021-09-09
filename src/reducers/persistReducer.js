import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import reducers from "../reducers";
import hardSet from "redux-persist/lib/stateReconciler/hardSet";

const persistConfig = {
  key: "primary",
  version: 1,
  storage,
  stateReconciler: hardSet,
};

const pReducer = persistReducer(persistConfig, reducers);
export default pReducer;
