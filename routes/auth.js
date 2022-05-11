const express = require('express');
const router = express.Router();
const User = require('../models/User');

//posting data to test data base in user collection 
router.post('/',(req,res)=>{
    obj ={
        a: 'thios',
        number: 34
    }
    // res.json(obj)

    //we are able to read req.body due to using app.use(express.json());
    console.log(req.body);
    res.send(req.body);
    //saving User schema body in user
    const user = User(req.body);
    //we can save data to database using this below command 
    user.save();
})
module.exports = router;