/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ErrorRequestHandler } from 'express';
import { ZodError } from 'zod';
import config from '../config';
import { handleZodError } from '../errors/HandleZodError';
import { TErrorDetails, TErrorSource } from '../interface/error';
import handleCastError from '../errors/HandleCastError';
import { AppError } from '../errors/AppError';
import handleDuplicateError from '../errors/HandleDuplicateError';
import handleValidationError from '../errors/HandleValidationError';
 

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  const  statusCode =  500;
  let message =   err.message || 'Something went wrong';
  let errorMessage = err.message ||  'Something went wrong'
  let errorDetails:TErrorDetails   = {
    issues: [{
      expected: err.expected ||"",
      received: err.received || "",
      code:err.code || "",
      path: err.path ||["", ""],
      message:err.message || '',
  }],
  name: err.name || "",
  } 

 

  if (err instanceof ZodError) {
    const simplifiedError = handleZodError(err);
   message = simplifiedError.message
   errorMessage= simplifiedError.errorMessage
   errorDetails = simplifiedError.errorDetails
  }else if (err?.name === 'CastError') {
    const simplifiedError =  handleCastError(err);
    message = simplifiedError?.message
    errorMessage = `${simplifiedError?.errorMessage} is not a valid ID! `
    errorDetails = err
  
  }
  else if (err?.name === 'ValidatorError'){
     const simplifiedError =  handleValidationError(err)
    message = simplifiedError?.message
   }else if (err?.code === 11000) {
    if(err instanceof Error){
      message = 'Duplicate Error';
    // eslint-disable-next-line no-useless-escape
    const regex = /\"(.*?)\"/;
    const match = err.message.match(regex);
    
    if (match) {
      const extractedValue = match[1];
      errorMessage = `${extractedValue} is already exists`;
    }   
    } 
   
  }else if (err instanceof Error) {
 message= err.message || 'Invalid Id'
 // eslint-disable-next-line no-useless-escape
 const regex = /\"([a-f\d]+)\"/i;
  const match = err.message.match(regex);

  if (match) {
    const extractedValue = match[1];
    errorMessage = `${extractedValue} is not a valid id `;
  }
 
  }else if (err instanceof AppError) {
    message = err?.message;
  }
  

  return res.status(statusCode).json({
    success: false,
    message,
     errorMessage,
     errorDetails,
    stack : err?.stack ,
 
 
  });
};

export default globalErrorHandler;
