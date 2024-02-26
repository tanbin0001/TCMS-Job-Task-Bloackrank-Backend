import catchAsync from "../../../utils/catchAsync";
import sendResponse from "../../../utils/sendResponse";
import { ExpenseServices } from "./expense.Services";

const createExpense = catchAsync(async(req, res) => {
    const result =  await  ExpenseServices.createExpenseIntoDb(req.body);
    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: 'Expense created successfully!',
        data: result
    })
});
const getAllExpenses = catchAsync(async(req, res) => {
    const result =  await  ExpenseServices.getAllExpenses();
    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: 'Expenses retrieved successfully!',
        data: result
    })
});



export const  ExpenseControllers = {
    createExpense,
    getAllExpenses
    }