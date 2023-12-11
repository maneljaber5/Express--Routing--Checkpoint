const express=require ("express");
const userRouter=express.Router();
const users=require ("../UserList");

//get user 

userRouter.get("/" , (req, res)=> res.send({listuser:users}));

userRouter.get("/boutique", (req, res)=>{
const date =new Date();

const hours =date.getHours();

if (hours> 8 && hours<18){
    res.render("opened");

}else{
    res.render("closed");
}

})
//delete user 


//update user



//add user
userRouter.post("/login", (req, res)=> {
 let email=req.body.email;
 let password=req.body.password; 
 res.send(`my email is ${email} and my password is ${password}`);
})

module.exports=userRouter;