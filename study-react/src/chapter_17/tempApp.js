import React from 'react'
import CounterContainer from "./chapter_17/containers/CounterContainer";
import TodosContainer from "./chapter_17/containers/TodosContainer";
const App=()=>{

    return(
        <div>
            <CounterContainer number={0}/>
            <hr/>
            <TodosContainer/>
        </div>
    )
}

export default App;