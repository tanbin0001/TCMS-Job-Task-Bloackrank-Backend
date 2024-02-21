
import express from 'express';
 

import { AuthValidations } from './auth.validation';
import { validateRequest } from '../../middleWares/validateRequest';
import { AuthControllers } from './auth.controller';
import auth from '../../middleWares/auth';
 
 

const router = express.Router();
 

router.post('/register',validateRequest(AuthValidations.registrationValidationSchema), AuthControllers.registerUser)
router.post('/login',validateRequest(AuthValidations.loginValidationSchema), AuthControllers.loginUser)
router.post('/change-password', auth('user'), AuthControllers.changePassword)

export const AuthRoutes = router;