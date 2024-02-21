import { z } from "zod";

const registrationValidationSchema = z.object({

       username: z.string({required_error: 'Username is required!'}),
    email: z.string({required_error: 'Email is required!'}),
    password: z
    .string({
      invalid_type_error: 'Password must be a string',
    })
    .min(8, { message: 'Password must be at least 8 characters long' })
    .max(20, { message: 'Password cannot be more than 20 characters long' })
    .regex(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/, {
      message:
        'Password must contain at least one uppercase letter, one lowercase letter, one digit, one special character, and be at least 8 characters long'
    })

})
const loginValidationSchema = z.object({

       username: z.string({required_error: 'Username is required!'}),
    password: z.string({required_error: 'password is required!'}),
   
})

 

export const AuthValidations = {
    registrationValidationSchema,
    loginValidationSchema,
 

}