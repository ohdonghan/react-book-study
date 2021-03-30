import React from 'react'
import {connect} from 'react-redux'
import {changeInput,insertInput,toggle, remove} from'../modules/Todos'
import Todos from '../components/Todos'

const TodosContainer=({
    input,
    todos,
    changeInput,
    insertInput,
    toggle,
    remove
})=>{
    return(
        <Todos
            input={input}
            todos={todos}
            onChangeInput={changeInput}
            onInsert={insertInput}
            onToggle={toggle}
            onRemove={remove}
            />
    )
}

export default connect(
    ({Todos})=>({
        input:Todos.input,
        todos:Todos.todos
    }),
    {
        changeInput,
        insertInput,
        toggle,
        remove
    }
)(TodosContainer)