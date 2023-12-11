const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
    username : {
        type: String,
        required: true
    },
    UserType: {
        type:String,
        enum:["seller","buyer"],
        required: true
    },
    password:{
        type:String,
        required: true
    }
},
{
    timestamps: true
});

const Users = mongoose.model("unityuser", Schema);

module.exports = Users