
const mongoose = require('mongoose');




const UserSchema = new Schema({
title:{
    type: String,
    required: true
},
description:{
    type: String,
    required: true,
 
},
tag:{
    type: String,
     default: "General"
    
},
date:{
    type: String,
    default: Date.now
}
  });
                            //  model name     schema name
                            //     ||           ||
  module.exports = mongoose.model('user',UserSchema)