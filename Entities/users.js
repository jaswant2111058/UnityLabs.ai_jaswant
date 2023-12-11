const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
    username : {
        type: String,
        required: true,
        unique:[true,"user name allready exist"]
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