const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
    seller_id : {
        type: String,
        required: true,
        unique:[true," already exist"],
    },
    product_id:[],
},
{
    timestamps: true
});

const Users = mongoose.model("catalogs", Schema);

module.exports = Users