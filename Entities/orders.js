const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
    buyer_id: {
        type: String,
        required: true
    },
    seller_id: {
        type: String,
        required: true
    },
    catalog_id: {
        type: String,
        required: true,
    },
    product_id: Array,
},
    {
        timestamps: true
    });

const Users = mongoose.model("order", Schema);

module.exports = Users