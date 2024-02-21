import httpStatus from "http-status";
import { AppError } from "../../errors/AppError";
import { TTour } from "./tour.interface";
import { TourModel } from "./tour.model"










const createTourIntoDB = async (payload: TTour) => {
    const result = TourModel.create(payload);
    return result;
}



const getAllToursFromDB = async () => {
    const result = await TourModel.find();
    return result;

};


const updateTourIntoDB = async (
    _id: string,
    payload: Partial<TTour>,
) => {
 
     const tour = await TourModel.findById(_id);
     if(tour?.expenseStatus === 'paid'){
        throw new AppError(httpStatus.BAD_REQUEST, 'You ca')
     }
 

    const result = await TourModel.findOneAndUpdate({ _id }, payload, {
        new: true,
    })

    return result;
}

const deleteSingleItemFromDB = async (  id: string) => {
    const result = await TourModel.deleteOne({_id : id});
    return result;
 }


export const TourServices = {
    createTourIntoDB,
    getAllToursFromDB,
    updateTourIntoDB,
    deleteSingleItemFromDB
}





