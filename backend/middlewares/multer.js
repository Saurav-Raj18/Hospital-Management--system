/* Multer is a middleware for handling multipart/form-data, which is primarily used for uploading files in Node.js applications.to handle file uploads efficiently. */

import multer from "multer";

/* 
multer.diskStorage():
This specifies that files should be stored on the server's disk (local storage) instead of memory or cloud.
*/

//storage configuration
const storage=multer.diskStorage({
    filename:function(req,file,callback){
        callback(null,file.originalname)
    }
})

//create multer upload instance
const upload=multer({storage})
//console.log("upload multer",upload)
export default upload