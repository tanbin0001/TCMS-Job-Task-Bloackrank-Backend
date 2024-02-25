
import express from 'express';
import { ExpenseControllers } from './expense.controllers';

 



const router = express.Router();


router.post('/record-expense', ExpenseControllers.createExpense)
 
export const ExpenseRoutes = router;