/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
 
import {  TGenericErrorResponse } from "../interface/error";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const handleDuplicateError = (err : any) : TGenericErrorResponse => {
 

      
    const  statusCode = 400;
    return  {
        statusCode,
        message : 'Invalid ID',
         
    }
}

export default handleDuplicateError;