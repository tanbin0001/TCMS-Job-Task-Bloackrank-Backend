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

const updateTour = catchAsync(async(req, res) => {
    const {_id} = req.params;

    const result =  await  TourServices.updateTourIntoDB(_id, req.body);
    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: 'Tour updated successfully!',
        data: result
    })
});

const deleteTour = catchAsync(async(req, res) => {
    const {id} = req.params;

    const result =  await  TourServices.deleteSingleItemFromDB(id );
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: 'Tour deleted successfully!',
        data: result
    })
});

export const  TourControllers = {
    createTour,
    getAllTours,
    updateTour,
    deleteTour
    }