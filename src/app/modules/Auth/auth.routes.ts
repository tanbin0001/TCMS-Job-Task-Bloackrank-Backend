
import express from 'express';
 

import { AuthValidations } from './auth.validation';
import { validateRequest } from '../../middleWares/validateRequest';
import { AuthControllers } from './auth.controller';
 
 

const router = express.Router();
 

router.post('/register',validateRequest(AuthValidations.registrationValidationSchema), AuthControllers.registerUser)
router.post('/login',validateRequest(AuthValidations.loginValidationSchema), AuthControllers.loginUser)
 
export const AuthRoutes = router;
