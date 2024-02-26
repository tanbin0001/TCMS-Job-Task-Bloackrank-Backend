import mongoose, { Schema  } from "mongoose";
import { TExpense,  } from "./expense.interface";

 




export const ExpenseSchema  = new Schema<TExpense>({
    tourId: { type: Schema.ObjectId,ref:'Tour', required: true },
    registeredTourId: { type: Schema.ObjectId,ref:'RegisterTour', required: true },
    amount: { type: Number, required: true },
    date: { type: Date, required: true },
    description: { type: String, required: true },
    payer: { type: Schema.ObjectId, ref:'User',required: true }
  });
  export const ExpenseModel = mongoose.model<TExpense>('Expense', ExpenseSchema);
