import {combineReducers} from 'redux'
import Counter from "./Counter";
import Todos from "./Todos";

const rootReducer = combineReducers({
    Counter,
    Todos
});

export default rootReducer;