class Apierror extends Error{
    constructor(
        message = "Internal Server Error",
        errors = [], 
        statuscode,
        stack = "")
    {
        super(message);
        this.message = message;
        this.statuscode = statuscode;
        this.errors = errors;
        this.data = null;
        this.success = false;
        if(stack){
            this.stack = stack;
        }
        else{
            Error.captureStackTrace(this,this.constructor);
        }
    }
}

export {Apierror};