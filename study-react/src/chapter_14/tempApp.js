//const newsAPIKey ='e78e3977b99642cda29e8a0dbfd1701d'

import React,{useState,useCallback} from 'react'
import {Route} from 'react-router-dom'
import NewsPage from "./chapter_14/NewsPage";

const App=()=>{

    return(
        <Route path='/:category?' component={NewsPage}/>
    )
}

export default App;