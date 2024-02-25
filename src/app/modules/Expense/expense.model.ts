import mongoose, { Schema  } from "mongoose";
import { TExpense,  } from "./expense.interface";

 




export const ExpenseSchema  = new Schema<TExpense>({
    tourId: { type: String, required: true },
    registeredTourId: { type: String, required: true },
    amount: { type: Number, required: true },
    date: { type: Date, required: true },
    description: { type: String, required: true },
    payer: { type: String, required: true }
  });
  export const ExpenseModel = mongoose.model<TExpense>('Expense', ExpenseSchema);
