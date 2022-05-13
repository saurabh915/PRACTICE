const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const user = require('../models/User');
//posting data to test data base in user collection 
router.post('/createuser',[
    body('name','enter a valid name').isLength({min: 3}),
    body('email').isEmail(),
    body('password').isLength({min:5})//here we enter what we have to validate and what should be there values


]
    
    
    ,async(req,res)=>{


const errors = validationResult(req);
if(!errors.isEmpty()){
    return res.status(400).json({errors:errors.array()});
}
//check whether the user with this email is already exists


try{
    let user = await User.findOne({email:req.body.email});
if(user){
    return res.status(400).json({error:"sorry a user with this email already exists"})
}
//to save data to database 
 user = await User.create({
    name: req.body.name,
    password:req.body.password,
    email: req.body.email

})
res.json(user);
}
catch(error){
    console.error(error.message);
    res.status(500).send("some internal error occured")
}



// .then(user=>res.json(user))
// .catch(err=>{console.log(err)
// res.json({error:"please enter a unique value for email",message:err.message})})





    obj ={
        a: 'thios',
        number: 34
    }
    // res.json(obj)

    //we are able to read req.body due to using app.use(express.json());
    // console.log(req.body);
    // res.send(req.body);
    // //saving User schema body in user
    // const user = User(req.body);
    // //we can save data to database using this below command 
    res.json(user)
    // user.save();
})
module.exports = router;