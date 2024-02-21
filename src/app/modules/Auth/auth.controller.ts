/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from "http-status";
import catchAsync from "../../../utils/catchAsync";
import sendResponse from "../../../utils/sendResponse";
import { AuthServices } from "./auth.service";












const registerUser = catchAsync(async(req, res) => {
    const result =  await  AuthServices.registerUserIntoDb(req.body);
    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: 'User  registered  successfully',
        data: result
    })
}

)
const loginUser = catchAsync(async(req, res) => {
    const result =  await  AuthServices.loginUserIntoDb(req.body);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'User  login  successful',
        data: result
    })
}

)

 
  


export const  AuthControllers = {
registerUser,
loginUser,
 
}