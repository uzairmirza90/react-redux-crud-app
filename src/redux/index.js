import { combineReducers } from "redux";
import { reducer } from "./reducers/reducer";

export const reducers = combineReducers({
    events: reducer
})