import catchAsync from "../../../utils/catchAsync";
import sendResponse from "../../../utils/sendResponse";
import { RegisterTourServices } from "./registerTour.Services";

const registerTour = catchAsync(async(req, res) => {
    const result =  await  RegisterTourServices.registerTourIntoDB(req.body);
    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: 'Tour Registered Successfully',
        data: result
    })
});

const getMyRegisteredTours = catchAsync(async(req, res) => {
    const { _id } = req.query;
 
    const result =  await  RegisterTourServices.getMyRegisteredTours((_id as string));
    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: 'Your registered tours!',
        data: result
    })
});
const getAllRegisteredTours = catchAsync(async(req, res) => {
    const result =  await  RegisterTourServices.getAllRegisteredTours();

    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: 'All registered tours retrieved successfully!',
        data: result
    })
});



export const  RegisterTourControllers = {
    registerTour,
    getMyRegisteredTours,
    getAllRegisteredTours
    }