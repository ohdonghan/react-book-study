import Router from 'koa-router'
import auth from "./auth/index.js";

const api = new Router()

api.use('/auth',auth.routes())

export default api
