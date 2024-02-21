export class AppError  extends Error {


    constructor(statusCode : number, message: string, stack=''){
        super(message)
        if(stack){
            this.stack = stack;
        }else {
            Error.captureStackTrace(this, this.constructor)
        }
    }
}
