/* eslint-disable no-unused-vars */
import { Model } from "mongoose";
import { USER_ROLE } from "./user.const";

export interface TUser  {
    _id:string;
    firstName:string;
    lastName?:string;
    username: string;
    email: string;
    imageLink?: string;
    password: string;
    role:  'user';
    updatedAt?: Date;


}

export type TUserRole =  keyof typeof USER_ROLE

export interface UserModel extends Model<TUser> {
    isUserExists  (username: string): Promise<TUser>;
    isUserExistsWithEmail  (email: string): Promise<TUser>;
    isUserPasswordMatched(plainTextPassword : string,hashedPassword : string): Promise<boolean>;
    isJwtIssuedBeforePasswordChange (passwordChangedTimeStamp : Date, jwtIssuedTimeStamp: number): boolean;

 }