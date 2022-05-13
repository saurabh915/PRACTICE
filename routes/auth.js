const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
//posting data to test data base in user collection 
router.post('/',[
    body('name','enter a valid name').isLength({min: 3}),
    body('email').isEmail(),
    body('password').isLength({min:5})


]
    
    
    ,(req,res)=>{


const errors = validationResult(req);
if(!errors.isEmpty()){
    return res.status(400).json({errors:errors.array()});
}
//to save data to database 
User.create({
    name: req.body.name,
    password:req.body.password,
    email: req.body.email

}).then(user=>res.json(user))
.catch(err=>{console.log(err)
res.json({error:"please enter a unique value for email",message:err.message})})
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
    // user.save();
})
module.exports = router;