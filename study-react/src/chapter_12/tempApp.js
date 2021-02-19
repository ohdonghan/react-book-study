import React,{useState,useCallback,useRef} from 'react'
import produce from 'immer'
const App=()=>{

    const nextId= useRef(1)
    const [form,setForm]=useState({name:'',userName:''})
    const [data,setData]=useState({
        array:[],
        uselessValue:null
    })
    const onChange =useCallback(e=>{
        const {name,value}=e.target
        setForm(
            produce(draft=>{
                draft[name]=value
            })
        )
    },[])

    const onSubmit=useCallback(e=> {
        e.preventDefault()
        const info = {
            id: nextId.current,
            name: form.name,
            userName: form.userName
        }

        setData(
            produce(draft => {
                draft.array.push(info)
            })
        )

        setForm({
            name:'',
            userName:''
        })
        nextId.current+=1;

    },[form.name,form.userName]);

    const onRemove=useCallback(id=>{
        setData(
            produce(draft=>{
                draft.array.splice(draft.array.findIndex(info=>info.id==id),1)
            })
        )
    },[])
    return(
        <div>
            <form onSubmit={onSubmit}>
                <input
                    name="userName"
                    placeholder="아이디"
                    value={form.userName}
                    onChange={onChange}
                />
                <input
                    name="name"
                    placeholder="이름"
                    value={form.name}
                    onChange={onChange}
                />
                <button type="submit">등록</button>
            </form>
            <div>
                <ul>
                    {data.array.map(info=>(
                        <li key={info.id} onClick={()=>onRemove(info.id)}>
                            {info.userName} ({info.name})
                        </li>
                    ))}
                </ul>
            </div>
        </div>

    )
}

export default App;