
import express from 'express';
import { TourControllers } from './tour.controller';
 
 

 
 
 

const router = express.Router();
 

router.post('/create-tour',TourControllers.createTour );
router.get('/tours',TourControllers.getAllTours );
router.patch('/update-tour/:_id',TourControllers.updateTour );
router.delete('/delete-tour/:_id'  , TourControllers.deleteTour);

 

 
export const TourRoutes = router;
