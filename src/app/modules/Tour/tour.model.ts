
import { Schema, model } from "mongoose";
import { TTour } from "./tour.interface";
 
const tourDetailsSchema = new Schema({
    destination: { type: String, required: true },
    duration: { type: String, required: true }
});

 
const tourSchema = new Schema({
    tourName: { type: String, required: true },
    tourDetails: { type: tourDetailsSchema, required: true },
    tourCreator: { type: String, required: true },
    expenseStatus: { type: String, enum: ['pending', 'paid'], required: true }
},{
    timestamps:true
});

 
export const TourModel = model<TTour>('Tour', tourSchema);