
const asyncHandler = (requestHandler)=>(req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err));
}



// const asyncHandler = (func) => async (req,res,next) =>{
//     try{
//         await func(req,res,next);
//     }

//     catch(err){
//         console.error(err.message);
//         res.status(err.code || 500).json
//         (
//             success = false,
//             message = err.message)
//     }

// }