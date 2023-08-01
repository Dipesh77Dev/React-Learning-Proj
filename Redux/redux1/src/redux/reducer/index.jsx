// import changeValue from "./action";
import { changeValue, getUserDemo } from "./action";

import { combineReducers } from "redux";

// const rootReducer = combineReducers({changeValue: changeValue});

const rootReducer = combineReducers({changeValue, getUserDemo});

export default rootReducer;