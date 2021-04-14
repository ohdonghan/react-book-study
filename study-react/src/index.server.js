import React from 'react'
import ReactDOMServer from 'react-dom/server'
import express from 'express'
import {StaticRouter} from 'react-router-dom'
import App from './App'

const app = express()

const serverRender = (req,res,next)=>{
    // 이함수는 404가 떠야 하는 상황에 404를 띄우지 않고 서버 사이드 렌더링 처리

    const context = {};
    const jsx=(
        <StaticRouter location={req.url} context={context}>
            <App/>
        </StaticRouter>
    )
    const root=ReactDOMServer.renderToString(jsx) // 렌더링하고
    res.send(root) // 클라이언트에게 응답

    app.listen(5000,()=>{
        console.log('Running on http://localhost:5000')
    })
}

