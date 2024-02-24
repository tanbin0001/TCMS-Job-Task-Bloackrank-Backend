/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from "http-status";
import catchAsync from "../../../utils/catchAsync";
import sendResponse from "../../../utils/sendResponse";
import { AuthServices } from "./auth.service";
 





const getAllUsers =catchAsync(async(req, res) => {
  const result =  await  AuthServices.getAllUsersFromDB();
  sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Users  retrieved  successfully',
      data: result
  })
}

)





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

const changePassword = catchAsync(async (req, res) => {
    // console.log(req,'from controller');

    try {
      const { ...passwordData } = req.body;
      const result = await AuthServices.changePassword(req.user, passwordData);
  
      sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Password is changed successfully',
        data: result,
      });
    } catch (error :any) {
      sendResponse(res, {
          success: false,
        statusCode: 400,
        message:  error.message ,
        data: null,
      });
    }
  });
  


export const  AuthControllers = {
registerUser,
loginUser,
getAllUsers,
changePassword
 
}