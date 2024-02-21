/* eslint-disable @typescript-eslint/no-explicit-any */
import { TErrorDetail } from "../interface/error";

 




 
  export   const handleZodError =(error: any )  =>{
    console.log({error});
    const issues  = error.errors.map((e :TErrorDetail) => ({
        expected: e.expected,
        received: e.received,
        code: 'invalid_type',
        path: e.path,
        message: e.message,
    }));
    const errorMessage = issues.map((issue : any) => {
      return `${issue.path.join('.')} ${issue.message}`;
  }).join('. ');

    return {
        success: false,
        message: "Validation Error",
        errorMessage,
        errorDetails: {
            issues,
            name: "ZodError",
        },
        stack: error.stack,
    };
}