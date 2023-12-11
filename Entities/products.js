const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
    name :{
        type: String,
        required: true
    },
    price:{
        type:String,
        required: true
    },
    seller_id:{
        type:String
    }
},
{
    timestamps: true
});

const Users = mongoose.model("products", Schema);

module.exports = Users