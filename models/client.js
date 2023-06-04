const mongoose =  require("mongoose");

const ClientModel = new mongoose.Schema({

  lastname:{
    type:String,
    required:true
  },
 
    
  firstname:{
    type:String,
    required:true
  },
    

  phone:{
    type:Number,
    required:true
  },
    email:{
      type:String,
      required: [true, "Please Enter Your Email"],
    },
   
  
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model('Client',ClientModel);