




export type TRegisterUser = {
    firstName:string;
    lastName:string;
    username: string;
    email: string;
    imageLink: string;
    password: string;
    role:  'user';
 

}
export type TLoginUser = {
    username: string;
    password: string;
 
}