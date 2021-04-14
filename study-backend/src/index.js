const Koa = require('koa')
const Router = require('koa-router')
const api = require('./api')
const app = new Koa()
const router = new Router()

router.use('/api',api.routes())
/*router.get('/', ctx=>{
  ctx.body='홈'
})

router.get('/about/:name?',ctx=>{ // 파라미터 방식
  const {name}=ctx.params

  ctx.body = name?`name :${name}`:'name이 없습니다'
})

router.get('/posts',ctx=>{ // 쿼리 방식
  const {id}=ctx.query

  ctx.body = id?`포스트#${id}`:'포스트 아이디가 없습니다'
})*/
app.use(router.routes()).use(router.allowedMethods) //app 인스턴스에 라우터 적용

app.listen(4000,()=>{
  console.log('Listening to port 4000')
})
