import React from 'react'
import {connect, useDispatch, useSelector} from 'react-redux'
import Counter from "../components/Counter"
import {decrease, increase} from "../modules/Counter";

const CounterContainer =()=>{
    const number = useSelector(state=>state.Counter.number)
    const dispatch= useDispatch();
    return(
        <Counter number={number}
                 onIncrease={()=>dispatch(increase())}
                 onDecrease={()=>dispatch(decrease())}/>
    )
}
export default CounterContainer

/*export default connect(
    state=>({
        number:state.Counter.number
    }),
    {
        increase,
        decrease
    }
)(CounterContainer)*/