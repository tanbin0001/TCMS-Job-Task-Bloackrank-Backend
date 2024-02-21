 export  type TErrorSource = {
    path: string | number;
    message: string;
  }[];


  export type TErrorDetails = {
 
   issues: Array<{
       expected: string;
       received: string | undefined;
       code: string;
       path: string[];
       message: string;
   }>;
   name: string;
};

  export type TErrorDetail = {
 
       expected: string;
       received: string | undefined;
       code: string;
       path: string[];
       message: string;
   name: string;
};


 export type  TGenericErrorResponse = {
    statusCode : number,
    message: string,
 
}

