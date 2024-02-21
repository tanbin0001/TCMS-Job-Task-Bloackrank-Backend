
import express from 'express';
import { SaleController } from './sale.controller';
import auth from '../../middleWares/auth';
 

 
 
 

const router = express.Router();
 

router.post('/sale-product', auth('user'), SaleController.saleProduct );
router.get('/all-sales', auth('user'), SaleController.getAllSales);
router.get('/:filter', auth('user'), SaleController.getSalesHistory);
 
 
 
export const SaleRoutes = router;
