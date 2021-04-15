import dotenv from 'dotenv'
import Koa from 'koa'
import Router from 'koa-router'
import bodyParser from 'koa-bodyparser'
import mongoose from 'mongoose'
import api from './api/index.js'
import jwtMiddleware from "./lib/jwtMiddleware.js";

dotenv.config()
const {PORT,MONGO_URI} = process.env // .env 비구조화 할당


mongoose.connect(MONGO_URI,{useNewUrlParser:true,useFindAndModify:false,useUnifiedTopology:true})
    .then(()=>{
        console.log("Connected to MongoDB")
    }).catch(e=>{
    console.error(e)
})

const app = new Koa()
const router = new Router()

router.use('/api',api.routes())

app.use(bodyParser())
app.use(jwtMiddleware)

app.use(router.routes()).use(router.allowedMethods) //app 인스턴스에 라우터 적용

const port = PORT || 4000;
app.listen(port,()=>{
    console.log('Server open')
    console.log('Listening to port %d',port)
})
