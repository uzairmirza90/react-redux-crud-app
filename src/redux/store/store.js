import { createStore } from "redux";
import { reducers } from '../index.js';

const store = createStore(reducers)

export default store;