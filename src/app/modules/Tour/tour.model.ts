
import { Schema, model } from "mongoose";
import { TTour } from "./tour.interface";
 
 
 
const tourSchema = new Schema({
    tourName: { type: String, required: true },
    destination: { type: String, required: true },
    duration: { type: String, required: true },
    tourCreator: { type: String, required: true },
    expenseStatus: { type: String, enum: ['pending', 'paid'], required: true }
},{
    timestamps:true
});

 
export const TourModel = model<TTour>('Tour', tourSchema);