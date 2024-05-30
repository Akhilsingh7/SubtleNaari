//wrapper function
//how to handle through try and catch
// const asyncHandler = (fn) => async (req,res,next) => {
//     try{
//         await fn(req,res,next)

//     }
//     catch(error){
//         res.status(error.code || 500).json({
//             success : false,
//             message : error.message
//         })
//     }
// }
//const asyncHandler = (fn) => { async()=>{} } for understanding

//promise se aise handle karenge
const asyncHandler = (requestHandler) => {
  (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

export { asyncHandler };

//higher order function
