import React, {useState} from 'react'
import loadable from "@loadable/component";
const SplitMe=loadable(()=>import('./chapter_19/SplitMe'),
    {
        fallback:<div>loading...</div>
    })

const App=()=>{
    const [visible,setVisible]= useState(false)

    const onClick=()=>{
        setVisible(true)
    }
    const onMouseOver=()=>{
        SplitMe.preload()
    }
    return(
        <div>
            <button onClick={onClick} onMouseOver={onMouseOver}>Hello</button>
            {visible&&<SplitMe/>}
        </div>
    )
}

export default App;
