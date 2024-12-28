import jwt from 'jsonwebtoken'

const authUser=async(req,res,next)=>{
    try {
         //console.log(req)
         const token=req.headers.token
         //console.log(atoken)
         if(!token){
             return res.status(401).json({
                  success:'false',
                  message:'Access denied. No token provided.'
             })
         }
         const token_decode=jwt.verify(token,process.env.JWT_SECRET)
        // console.log(token_decode)
        req.body.userId=token_decode.id;
        next();
    } catch (error) {
      console.log(error);
      return res.status(400).json({
          success: false,
          message:error.message,
      });
    }
}

export  {authUser}