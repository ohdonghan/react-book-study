import React from 'react'
import {Route,Link,Switch} from 'react-router-dom'
import home from'./chapter_13/home'
import about from'./chapter_13/about'
import profile from'./chapter_13/profile'
import HistorySample from "./chapter_13/HistorySample";
const App=()=>{

    return(
        <div>
            <ul>
                <li>
                    <Link to='/'>홈</Link>
                </li>
                <li>
                    <Link to='/about'>소개</Link>
                </li>
                <li>
                    <Link to='/profile/velopert'>velopert 프로필</Link>
                </li>
                <li>
                    <Link to='/profile/gildong'>gildong 프로필</Link>
                </li>
                <li>
                    <Link to='/HistorySample'>History 예제</Link>
                </li>
            </ul>
            <hr/>
            <Switch>
                <Route path="/" component={home} exact={true}/>
                <Route path={["/about","/info"]} component={about}/>
                <Route path='/profile/:username' component={profile}/>
                <Route path='/HistorySample' component={HistorySample}/>
                <Route
                    render={({location})=>(
                        <div>
                            <h2>이 페이지는 존재하지 않습니다:</h2>
                            <p>{location.pathname}</p>
                        </div>
                    )}/>
            </Switch>

        </div>
    )
}

export default App;