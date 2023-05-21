const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bloodSchema = new Schema({
    username: {
        type : String
    },
    oPositive:{
        type:Number
    },
    oNegative:{
        type:Number
    },
    aPositive:{
        type:Number
    },
    aNegative:{
        type:Number
    },
    bPositive:{
        type:Number
    },
    bNegative:{
        type:Number
    },
    abPositive:{
        type:Number
    },
    abNegative:{
        type:Number
    }
})

const blood = mongoose.model("blood",bloodSchema);

module.exports = blood;
