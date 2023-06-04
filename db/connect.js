const mongoose = require("mongoose");


const connectDB = (url)=>{
    return mongoose.connect(url, {//dont need this object in mongoose 6+
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
      }) 
    
}

module.exports = connectDB