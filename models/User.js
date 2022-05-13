
const mongoose = require('mongoose');
const { Schema } = mongoose;



const UserSchema = new Schema({
name:{
    type: String,
    required: true
},
email:{
    type: String,
    required: true,
    unique:true
},
password:{
    type: String,
    required: true
    
},
date:{
    type: String,
    default: Date.now
}
  });
  const user = mongoose.model('user',UserSchema);
                            //  model name     schema name
                            //     ||           ||
    user.createIndexes();  //this is for updating only new collections  elements                 
  module.exports = user