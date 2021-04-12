import React from 'react'
import {connect} from 'react-redux'
import {increaseAsync,decreaseAsync} from "../../chapter_18/modules/Counter";
import Counter from '../components/Counter'

const CounterContainer=({number,increaseAsync,decreaseAsync})=>{
    return(
        <Counter number={number} onIncrease={increaseAsync} onDecrease={decreaseAsync}/>
    )
}

export default connect(
    state=>({
        number:state.Counter
    }),
    {
        increaseAsync,
        decreaseAsync
    }
)(CounterContainer)