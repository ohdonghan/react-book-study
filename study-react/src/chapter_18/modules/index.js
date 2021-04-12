import {combineReducers} from "redux";
import Counter from './Counter'
import sample from "./sample";
const rootReducer =combineReducers({
    Counter,
    sample
})

export default rootReducer
