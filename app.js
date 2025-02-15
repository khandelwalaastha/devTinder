const express = require('express');
const app = express();
const {adminAuth, userAuth} =require("./middlewares/auth");
app.use("/admin",adminAuth);
app.get("/user",userAuth,(req,res)=>{
  res.send("User data sent");
});
app.get("/admin/getAllData",(req,res)=>{
  res.send("sent all data");
})
app.listen(3000, () => {
  console.log("server is successfully running on port 3000");
});

