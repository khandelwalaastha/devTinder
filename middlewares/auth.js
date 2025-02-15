 const adminAuth=(req,res,next) =>{
    console.log("Admin auth is called");
    const token="xyz";
    const isAdminAuthorized=token==="xyz";
    if(!isAdminAuthorized){
        res.status(401).send("unauthorized user");
    }
    else{
        next();
    }
};

const userAuth=(req,res,next) =>{
    console.log("Admin auth is called");
    const token="xyz";
    const isAdminAuthorized=token==="xyz";
    if(!isAdminAuthorized){
        res.status(401).send("unauthorized user");
    }
    else{
        next();
    }
}
module.exports={
adminAuth,
userAuth,
}