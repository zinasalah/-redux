import { createStore } from "redux";
import Taskreducer from "./reducer";

export default createStore(
    Taskreducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);