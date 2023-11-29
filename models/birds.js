const mongoose = require("mongoose");

const birdsSchema = mongoose.Schema({
Name: {
  type: String,
    required: true,
    trim: true, 
    minlength: 1, 
    maxlength: 255, 
},
  color:{
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    maxlength: 255,
  } ,
  Age: {
    type:Number,
    required:true,
    min:1,
    max:100
  }
});

module.exports = mongoose.model("birds", birdsSchema);