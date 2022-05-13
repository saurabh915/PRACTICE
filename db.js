const mongoose = require('mongoose');


const mongoURI = "mongodb://localhost:27017/inotebook?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"


const connectToMongo=()=>{
    //using mongoURI connection with local host is done 
    mongoose.connect(mongoURI,()=>{
        console.log("connected to mongodb Successfully");
    })
}


//exporting this function only not file
module.exports = connectToMongo;