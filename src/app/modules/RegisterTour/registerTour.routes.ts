
import express from 'express';
import { RegisterTourControllers } from './registerTour.controllers';

 



const router = express.Router();


router.post('/register-tour', RegisterTourControllers.registerTour)
router.get('/my-tours', RegisterTourControllers.getMyRegisteredTours)
router.get('/all-tours', RegisterTourControllers.getAllRegisteredTours)
 
export const RegisterTourRoutes = router;