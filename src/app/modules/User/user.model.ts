 
 

import { Schema, model } from "mongoose";
import { TUser, UserModel } from "./user.interface";
import bcrypt from 'bcrypt';
import config from "../../config";


const userSchema = new Schema<TUser,UserModel>({
    firstName: {
        type: String,
        required: true,
        unique: true,
    },
    lastName: {
        type: String,
        required: true,
        unique: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    imageLink: {
        type: String,
        required: true,
        unique: true,
    },
   
    email:{
        type: String,
        required: true,
        unique:true,
    },
    password: {
        type: String,
        required: true,
    },
   
    role: {
        type: String,
        enum: ['user'],
        default: 'user'
    },
  
      updatedAt: { type: Date, default: Date.now },

}, {
    timestamps: true
});


userSchema.pre('save', async function (next) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const user = this  as TUser;
    user.password = await bcrypt.hash(
        user.password,
        Number(config.bcrypt_salt_rounds)
        );
        
        
    
    next();

})


 
 
userSchema.statics.isUserExists = async function (username: string) {
    return await User.findOne({ username }).select('+password');
}
userSchema.statics.isUserPasswordMatched = async function (plainTextPassword, hashedPassword) {
    return await bcrypt.compare(plainTextPassword, hashedPassword)
        ;
}


userSchema.statics.isJwtIssuedBeforePasswordChange = function(passwordChangedTimeStamp : Date, jwtIssuedTimeStamp: number){
    const passwordChangeTime = new Date (passwordChangedTimeStamp).getTime()/1000;
return passwordChangeTime > jwtIssuedTimeStamp;
}
export const User = model<TUser, UserModel>('User', userSchema);