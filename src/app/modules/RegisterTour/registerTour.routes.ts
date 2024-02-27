
import express from 'express';
import { RegisterTourControllers } from './registerTour.controllers';
import { validateRequest } from '../../middleWares/validateRequest';
import { RegisterTourValidations } from './registerTour.validation';
  
 



const router = express.Router();


router.post('/register-tour', validateRequest(RegisterTourValidations.TRegisterTourSchema),RegisterTourControllers.registerTour)
router.get('/my-tours', RegisterTourControllers.getMyRegisteredTours)
router.get('/all-tours', RegisterTourControllers.getAllRegisteredTours)
 
export const RegisterTourRoutes = router;