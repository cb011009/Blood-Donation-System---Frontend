const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const donationSchema = new Schema({

    name:{type:String},
    date:{
        type:String
    },
    quantity:{
        type:Number
    },
    location:{
        type:String
    },
    bloodtype:{
        type:String
    }

})

const donation = mongoose.model("donation",donationSchema);

module.exports = donation;