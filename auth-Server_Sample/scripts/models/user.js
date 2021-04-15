import mongoose from "mongoose";
import jwt from 'jsonwebtoken'
const {Schema} = mongoose
import bcrypt from 'bcrypt'

const UserSchema = new Schema({
  username:String,
  hashedPassword:String
})

UserSchema.methods.setPassword = async function(password){
  const hash = await bcrypt.hash(password,10)
  this.hashedPassword = hash
}

UserSchema.methods.checkPassword = async function(password){
  const result = await bcrypt.compare(password,this.hashedPassword)
  return result
}

UserSchema.methods.serialize = function(){ // data 반환 시 주요정보 외부 노출안되도록 제거
  const data = this.toJSON()
  delete data.hashedPassword
  return data
}

UserSchema.methods.generateToken=function(){
  const token = jwt.sign(
    {// 첫번쨰 파라미터에는 토큰 안에 집어넣고 싶은 데이터
      _id:this.id,
      username:this.username,
    },
    process.env.JWT_SECRET, // 두번째 파라미터에는 암호키
    {
      expiresIn: '3d' // 3일동안 유효함
    }
  )

  return token
}
UserSchema.statics.findByUsername = function(username){
  return this.findOne({username})
}

const User = mongoose.model('User',UserSchema)
export default User
