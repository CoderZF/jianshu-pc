import { createStore, compose, applyMiddleware } from "redux";
import thunx from "redux-thunk";
import reducer from "./reducer";

const store = createStore(reducer);

export default store;
