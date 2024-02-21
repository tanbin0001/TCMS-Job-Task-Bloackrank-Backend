
import express from 'express';
import { TourControllers } from './tour.controller';
import { TourServices } from './tour.service';
 

 
 
 

const router = express.Router();
 

router.post('/create-tour',TourControllers.createTour );
router.get('/tours',TourControllers.getAllTours );
router.patch('/update-tour/:_id',TourControllers.updateTour );
router.delete('/delete-product/:id'  , TourServices.deleteSingleItemFromDB);

 

 
export const TourRoutes = router;
