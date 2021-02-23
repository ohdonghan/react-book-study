import React from 'react'
import qs from 'qs'
const about=({location})=>{
    const query=qs.parse(location.search,{ignoreQueryPrefix: true})// 맨앞의 ?를 생략
    const showDetail=query.detail==='true'
    return(
        <div>
            <h1>About</h1>
            <p1>어바웃 페이지</p1>
            {showDetail&&<p>detail 값을 true로 설정하셨군요!</p>}
        </div>
    )
}

export default about;