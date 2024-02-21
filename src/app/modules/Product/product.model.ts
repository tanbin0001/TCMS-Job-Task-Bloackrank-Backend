import {  Schema, model } from "mongoose";
import { TSportsItem } from "./product.interface";





const productSchema = new Schema<TSportsItem>({
 
    name: { type: String, required: true },
    imageLink:{type:String, required:true},
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    sportType: { type: String, required: true },
    brand: { type: String, required: true },
    size: { type: String, required: true },
    material: { type: String, required: true },
    color: { type: String, required: true },
    condition: { type: String, enum: ['new', 'used'], required: true },
    weight: { type: Number },
    style: { type: String },
    isCheckedToDelete:{type:Boolean, default:false}
})

export const SportsItemModel =  model<TSportsItem>('SportsItem', productSchema);
