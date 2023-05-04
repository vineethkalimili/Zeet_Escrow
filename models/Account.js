const mongoose = require('mongoose');

const accountSchema = mongoose.Schema({
    accountNumber:{
        type:String,
        required:true
    },
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    salutation:{
        type:String,
        required:true
    },
    amountInUSD:{
        type:String,
        required:true
    },
    userWalletAddress:{
        type:String,
        required:true
    },
    timeStamp:{
        type:String,
        required:true
    }
    
    }
)

module.exports = mongoose.model('Accounts',accountSchema);