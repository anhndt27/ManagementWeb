import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import auth from "./auth.reducer";
import common from "./common.reducer";
import { LOGOUT } from "../../constants/actionTypes";
import table from './table.reducer'; 

const appReducer = combineReducers({
  auth,
  common,
  table,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === LOGOUT) {
    storage.removeItem("persist:root");
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

export default rootReducer;
