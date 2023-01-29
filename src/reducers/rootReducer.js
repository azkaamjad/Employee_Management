import { combineReducers } from "redux";
import customerReducer from "../Redux/customers/customerSlice";

const rootReducer = combineReducers({
  customer: customerReducer
});

export default rootReducer;
