const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    sname :{
        type : String,
        required : true,
        trim : true
    },
    
    semail :{
        type : String,
        required : true,
    },

    sphone :{
        type : String,
        required : true,
    },

    saddress :{
        type : String,
        required : true,
        
    },

    sdescription :{
        type : String,
        required : true,
       
    },

    scategory :{
        type : String,
        required : true,
    
    },

    img :{
        type: String
    }
   

});

const User = mongoose.model('SellUserDetail' , userSchema);
module.exports = User;