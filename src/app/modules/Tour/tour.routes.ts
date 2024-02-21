
import express from 'express';
import { TourControllers } from './tour.controller';
 

 
 
 

const router = express.Router();
 

router.post('/create-tour',TourControllers.createTour );
router.get('/tours',TourControllers.getAllTours );
 

 
export const TourRoutes = router;
