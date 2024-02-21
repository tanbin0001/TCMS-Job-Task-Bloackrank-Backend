import httpStatus from "http-status";
import catchAsync from "../../../utils/catchAsync";
import sendResponse from "../../../utils/sendResponse";
import { TourServices } from "./tour.service";






const createTour = catchAsync(async(req, res) => {
    const result =  await  TourServices.createTourIntoDB(req.body);
    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: 'Tour Created Successfully',
        data: result
    })
});

const getAllTours = catchAsync(async(req, res) => {
 
    const result =  await  TourServices.getAllToursFromDB();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: `All tours retrieved Successfully`,
        data: result
    })
});


export const  TourControllers = {
    createTour,
    getAllTours
    }