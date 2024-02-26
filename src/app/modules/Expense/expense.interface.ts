import { Types } from "mongoose";

export interface TExpense {
    tourId: Types.ObjectId;
    registeredTourId: Types.ObjectId;
    amount: number;
    date: Date;
    description: string;
    payer: Types.ObjectId;
  }
  