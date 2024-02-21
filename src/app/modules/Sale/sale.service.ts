import httpStatus from "http-status";
import { AppError } from "../../errors/AppError";
import { SportsItemModel } from "../Product/product.model";
import { TSale } from "./sale.interface";
import SaleModel from "./sale.model";
 







const saleProductSaveInDB = async (payload: TSale) => {
    const id = payload.sportsItemId;
    const sportsItem = await SportsItemModel.findById(id);
    if (!sportsItem) {
        throw new AppError(httpStatus.NOT_FOUND, 'Item not found')
    }
    if (sportsItem?.quantity === 0) {
       throw  new AppError(httpStatus.NO_CONTENT, 'Item already sold!')
        
    }
    

    const newQuantity = sportsItem!.quantity - payload.quantity;

    await SportsItemModel.findOneAndUpdate(
        { _id: id },
        { quantity: newQuantity },
        { new: true }  // Set to true to get the updated document
    );
    const result = await SaleModel.create(payload);
    const populatedResult = await result.populate({
        path: 'sportsItemId'
    });

    return populatedResult;

}


// const getAllSalesFromDB = async() => {
//   const result = await SaleModel.find({});
//   console.log(result);
//   return result;
// }
const getAllSalesFromDB = async () => {
  try {
    const result = await SaleModel.find();
    console.log(result);
    return result;
  } catch (error) {
    console.error("Error fetching sales from the database:", error);
    throw error; // Rethrow the error or handle it appropriately
  }
};

 


  const getSalesHistoryFromDb = async (timeRange : string) => {
 
    const today = new Date();
    today.setHours(0, 0, 0, 0);
  
    let startDate, endDate;
  
    switch (timeRange) {
      case 'daily':
        startDate = today;
        endDate = new Date(today.getTime() + 24 * 60 * 60 * 1000);
        break;
  
      case 'weekly':
        startDate = new Date(today);
        startDate.setDate(today.getDate() - today.getDay() + (today.getDay() === 0 ? -6 : 1));
        endDate = new Date(startDate.getTime() + 7 * 24 * 60 * 60 * 1000);
        break;
  
      case 'monthly':
        startDate = new Date(today.getFullYear(), today.getMonth(), 1);
        endDate = new Date(today.getFullYear(), today.getMonth() + 1, 1);
        break;
  
      case 'yearly':
        startDate = new Date(today.getFullYear(), 0, 1);
        endDate = new Date(today.getFullYear() + 1, 0, 1);
        break;
  
      default:
        throw new Error('Invalid time range provided');
    }
  
 
    const sales = await SaleModel.find({
      createdAt: { $gte: startDate, $lt: endDate }
    });
  
 
  
    return sales;
  };
  
 

export const SaleServices = {
    saleProductSaveInDB,
    getSalesHistoryFromDb,
    getAllSalesFromDB
  
}



 