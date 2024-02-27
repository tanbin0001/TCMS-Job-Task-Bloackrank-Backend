 

import httpStatus from "http-status";
import { AppError } from "../../errors/AppError";
import { TourModel } from "../Tour/tour.model";
import { RegisterTourModel } from "../RegisterTour/registerTour.model";
import { ExpenseModel } from "./expense.model";
import { ObjectId } from 'mongodb';

const createExpenseIntoDb = async (payload: any) => {
    const { tourId, registeredTourId } = payload;

    const tour = await TourModel.findById({_id: tourId});
    if (!tour) {
        throw new AppError(httpStatus.NOT_FOUND, 'Tour not found ')
    }

    const registeredTour = await RegisterTourModel.findById({_id: registeredTourId});
    if (!registeredTour) {
        throw new AppError(httpStatus.NOT_FOUND, 'This tour is not registered! ')
    }

    const saveExpense = await ExpenseModel.create(payload);

    const payerId = new ObjectId(payload.payer);
    const payerParticipant = registeredTour.participants.find(participant => participant.userId.equals(payerId));
    
    if (!payerParticipant) {
        throw new Error('Payer not found in participants!');
    }

    payerParticipant.totalSpend += payload.amount;

    let totalExpenses = 0;
    for (const participant of registeredTour.participants) {
        totalExpenses += participant.totalSpend || 0;
    }

    registeredTour.totalSpendOnThisTour = totalExpenses;
    const totalSpendOnThisTour = registeredTour.totalSpendOnThisTour || 0;

    const numberOfParticipants = registeredTour.participants.length;
    const perHeadCost = numberOfParticipants > 0 ? totalSpendOnThisTour / numberOfParticipants : 0;

    for (const participant of registeredTour.participants) {
        const dueOrLoan = (participant.totalSpend || 0) - perHeadCost;
        participant.dueOrLoan = Math.round(dueOrLoan);
        const otherExpenses = Math.round((participant.totalSpend || 0) - (participant.initialContribution || 0));
        participant.otherExpenses = otherExpenses;
    }

     await registeredTour.save();
    return saveExpense;
}



const getAllExpenses = async () => {
    const result = await ExpenseModel.find().populate('payer').populate('registeredTourId').populate('tourId');
    console.log(result);
    return result;
}

export const ExpenseServices = {
    createExpenseIntoDb,

    getAllExpenses
}
