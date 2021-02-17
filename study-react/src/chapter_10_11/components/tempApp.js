import React,{useState,useRef,useCallback} from 'react'
import TodoTemplate from "./chapter_10_11/components/TodoTemplate";
import TodoInsert from "./chapter_10_11/components/TodoInsert";
import TodoList from "./chapter_10_11/components/TodoList";

const App=()=>{
    const [todos,setTodos]=useState([
        {id:1, text: '할일 1', checked: true},
        {id:2, text: '할일 2', checked: true},
        {id:3, text: '할일 3', checked: false},
    ]);

    const nextId=useRef(4);

    const onInsert=useCallback(text=>{
        const todo={
            id:nextId.current,
            text,
            checked:false,
        };
        setTodos(todos.concat(todo));
        nextId.current+=1;
    },[todos]);

    const onRemove=useCallback(id=>{
        setTodos(todos.filter(todo=>todo.id!=id))
    },[todos])

    const onToggle=useCallback(id=>{
        setTodos(
            todos.map(todo=>
                todo.id==id?{...todo,checked:!todo.checked}:todo,),
        );
    },[todos],);

    return <TodoTemplate>
        <TodoInsert onInsert={onInsert}/>
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
    </TodoTemplate>
}

export default App;
