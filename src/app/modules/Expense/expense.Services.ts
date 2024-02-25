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

    // Update the total spend for the payer
    payerParticipant.totalSpend += payload.amount;

    // Calculate total expenses for this tour from each participant's totalSpend
    let totalExpenses = 0;
    for (const participant of registeredTour.participants) {
        totalExpenses += participant.totalSpend || 0;
    }

    // Update totalSpend property of RegisterTourModel
    registeredTour.totalSpendOnThisTour = totalExpenses;
    const totalSpendOnThisTour = registeredTour.totalSpendOnThisTour || 0;

    // Get the number of participants
    const numberOfParticipants = registeredTour.participants.length;

    // Calculate per head cost
    const perHeadCost = numberOfParticipants > 0 ? totalSpendOnThisTour / numberOfParticipants : 0;
    console.log(perHeadCost,'per head cost');
    for (const participant of registeredTour.participants) {
        // Calculate dueOrLoan for each participant
        const dueOrLoan = (participant.totalSpend || 0) - perHeadCost;
        // console.log(dueOrLoan,'due or loan');

        // Update the dueOrLoan property inside each participant object
        participant.dueOrLoan = dueOrLoan;
    }

    // Save the updated tour details with adjusted balances
    const res = await registeredTour.save();
 return saveExpense;
}

export const ExpenseServices = {
    createExpenseIntoDb,

}




