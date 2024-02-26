
import express from 'express';
import { ExpenseControllers } from './expense.controllers';

 



const router = express.Router();


router.post('/record-expense', ExpenseControllers.createExpense)
router.get('/all-expenses', ExpenseControllers.getAllExpenses)
 
export const ExpenseRoutes = router;