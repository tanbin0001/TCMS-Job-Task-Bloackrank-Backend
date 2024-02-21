import mongoose, { Schema } from "mongoose";
import { TSale } from "./sale.interface";
 




const saleSchema = new Schema<TSale>({
    sportsItemId: {
        type: Schema.Types.ObjectId,
        ref: 'SportsItem',
    },
    productName: { type: String, required: true },
    quantity: { type: Number, required: true },
    buyerName: { type: String, required: true },
 saleDate:{type:String, required:true}
},{
    timestamps:true
});



const SaleModel = mongoose.model<TSale>('Sale', saleSchema);

export default SaleModel;