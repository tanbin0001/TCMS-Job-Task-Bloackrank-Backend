
import express from 'express';
import { ProductController } from './product.controller';
import auth from '../../middleWares/auth';
 

 
 
 

const router = express.Router();
 

router.post('/add-product', auth('user'), ProductController.addProduct );
router.get('/all-products', auth('user'), ProductController.getAllProducts);
router.patch('/update-product/:_id' , auth('user'), ProductController.updateProduct);
router.delete('/delete-product/:id' , auth('user'), ProductController.deleteProduct);
router.post('/delete-multiple-products',  auth('user'),ProductController.deleteMultipleProducts);


 
export const ProductRoutes = router;
