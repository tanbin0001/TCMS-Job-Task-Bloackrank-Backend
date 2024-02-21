/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import httpStatus from "http-status";
import { User } from "../User/user.model"
import { TLoginUser, TRegisterUser } from "./auth.interface"
import { AppError } from "../../errors/AppError";
import { createToken } from "./auth.utils";
import config from "../../config";
import jwt, { JwtPayload } from 'jsonwebtoken';
import bcrypt from 'bcrypt';

 
const registerUserIntoDb = async (payload: TRegisterUser) => {
    const userData = await User.isUserExists(payload.username)
    // checking if user exists 
    if (userData) {
        throw new AppError(httpStatus.CONFLICT, 'This user is already exists, please use another username and email')
    }

  const result = await User.create({
        ...payload,
    });

    
    // eslint-disable-next-line no-unused-vars
    const dataWithOutSensitiveInfo = await User.findById(result._id).select('username email role _id updatedAt createdAt');
 
     
    return dataWithOutSensitiveInfo;


}




const loginUserIntoDb = async (payload: TLoginUser) => {
    const userData = await User.isUserExists(payload.username)
    //checking if user exists 
    if (!userData) {
        throw new AppError(httpStatus.NOT_FOUND, 'This user is not found')
    }

     // checking if the pass is correct
    if (! await User.isUserPasswordMatched(payload?.password, userData.password)) {
        throw new AppError(httpStatus.FORBIDDEN, 'Password is not matched!')
    }

    const { _id, username, email, role } = userData;

    const dataWithoutPassword = {
        _id: _id,
        username: username,
        email: email,
        role: role


    }

 
    //create token and send to client
    const jwtPayload = {
        _id: userData._id,
        role: userData.role as string,
        email: userData.email,

    }
    const accessToken = createToken(jwtPayload, config.jwt_access_secret as string, config.jwt_access_expiresIn as string)
    return {
        data: dataWithoutPassword,
        token: accessToken,
    };

}

 
const changePassword = async (user: JwtPayload, payload: { currentPassword: string, newPassword: string }) => {
 
    const { email } = user;


    // check if the user exists
    const userData = await User.findOne({ email });
 
 
    if (!userData) {
        throw new AppError(httpStatus.NOT_FOUND, 'User not found');
    }
    

 

    // checking if the current password is correct
    if (!(await User.isUserPasswordMatched(payload?.currentPassword, userData.password))) {
        throw new AppError(httpStatus.FORBIDDEN, 'Current password is not matched');
    }


    

    // hash the new password
    const newHashedPassword = await bcrypt.hash(payload.newPassword, Number(config.bcrypt_salt_rounds));
    
  
 

    // update the user document
    const result =  await User.findByIdAndUpdate(
        { _id: user._id },
        { password: newHashedPassword,
           
             updatedAt: new Date,
            }
    );
    

};

 


export const AuthServices = {
    registerUserIntoDb,
    loginUserIntoDb,
     
    changePassword
}