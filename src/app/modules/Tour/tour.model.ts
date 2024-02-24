
import { Schema, model } from "mongoose";
import { TTour } from "./tour.interface";
 
 
 
const tourSchema = new Schema({
    tourName: { type: String, required: true },
    destination: { type: String, required: true },
    tourCreator: { type: String, required: true },
    imageLink: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true }
},{
    timestamps:true
});

 
export const TourModel = model<TTour>('Tour', tourSchema);