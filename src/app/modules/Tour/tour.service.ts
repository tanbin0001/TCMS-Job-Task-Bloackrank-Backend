import { TTour } from "./tour.interface";
import { TourModel } from "./tour.model"










const createTourIntoDB = async(payload:TTour) => {
    const result = TourModel.create(payload);
    return result;
}



const getAllToursFromDB = async () => {
      const result = await TourModel.find();
      return result;
     
  };
  
export const  TourServices = {
    createTourIntoDB,
    getAllToursFromDB
 }
 
 



