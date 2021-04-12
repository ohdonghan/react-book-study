import React from 'react'
import {Route} from 'react-router-dom'
import Menu from './chapter_20/components/Menu'
import RedPage from './chapter_20/pages/RedPage'
import BluePage from './chapter_20/pages/BluePage'

const App=()=>{
    return(
        <div>
            <Menu/>
            <hr/>
            <Route path='/red' component={RedPage}/>
            <Route path='/blue' component={BluePage}/>
        </div>
    )
}

export default App
