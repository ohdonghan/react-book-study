import {createAction,handleActions} from 'redux-actions'


const COUNTER_INCREASE= 'counter/INCREASE';
const COUNTER_DECREASE= 'counter/DECREASE';

export const increase = createAction(COUNTER_INCREASE)
export const decrease = createAction(COUNTER_DECREASE)

const initialState=0

export const increaseAsync =()=>dispatch=>{
    setTimeout(()=>{
        dispatch(increase());
    },1000);
}

export const decreaseAsync =()=>dispatch=>{
    setTimeout(()=>{
        dispatch(decrease());
    },1000);
}

const Counter =handleActions(
    {
        [COUNTER_INCREASE]:state=>state+1,
        [COUNTER_DECREASE]:state=>state-1
    },
    initialState
)

export default Counter