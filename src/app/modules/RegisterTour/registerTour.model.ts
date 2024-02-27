import { Schema, model } from "mongoose";
import { TParticipant, TRegisterTour } from "./registerTour.interface";

const participantSchema = new Schema<TParticipant>({
    userId: { type: Schema.Types.ObjectId, ref:'User', required: true },
    initialContribution: { type: Number, required: true },
    totalSpend:{type:Number,default:0},
    otherExpenses: { type: Number, default:0 },
    dueOrLoan:{type:Number,default:0}
});

// Define the TourData schema
const registerTourSchema = new Schema<TRegisterTour>({
    tourId: { type: Schema.Types.ObjectId,ref:'Tour', required: true },
    participants: [participantSchema],
    totalSpendOnThisTour:{type:Number, default:0}
});

export const RegisterTourModel =   model<TRegisterTour>('RegisterTour', registerTourSchema)