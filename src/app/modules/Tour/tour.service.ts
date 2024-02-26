 
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
    const result = await TourModel.findOneAndUpdate({ _id }, payload, {
        new: true,
    })
    return result;
}

const deleteSingleItemFromDB = async (  _id: string) => {
    const result = await TourModel.deleteOne({_id });
    return result;
 }


export const TourServices = {
    createTourIntoDB,
    getAllToursFromDB,
    updateTourIntoDB,
    deleteSingleItemFromDB
}





