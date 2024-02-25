import { Types } from "mongoose";

export  interface TParticipant {
    userId: Types.ObjectId;
    initialContribution: number;
    // currentBalance: number;
    totalSpend?:number
    dueOrLoan?:number
}

export interface TRegisterTour {
    tourId: Types.ObjectId;
    participants: TParticipant[];
    totalSpendOnThisTour?: number;
}
