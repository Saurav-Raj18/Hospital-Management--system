import jwt from 'jsonwebtoken'


//admin authentication middleware
const authAdmin=async(req,res,next)=>{
      try {
           //console.log(req)
           const atoken=req.headers.token
          // console.log(atoken)
           if(!atoken){
               return res.status(401).json({
                    success:'false',
                    message:'Access denied. No token provided.'
               })
           }
           const token_decode=jwt.verify(atoken,process.env.JWT_SECRET)
          // console.log(token_decode)
           if((token_decode.email+token_decode.password)!==process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD){
                    return res.status(401).json({
                        success:'false',
                        message:'Access denied'
                })
           }
           next();
      } catch (error) {
        console.log(error);
        return res.status(400).json({
            success: false,
            message:error.message,
        });
      }
}

export default authAdmin