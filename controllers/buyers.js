const users = require("../Entities/users")
const orders = require("../Entities/orders")
const catalogs = require("../Entities/catalogs")
const products = require("../Entities/products")


exports.list_of_sellers = async (req, res) => {
    try {
        const data = await users.find({ userType: "seller" })
        const dataToSend = data.map((item) => {
            return ({
                seller_id: item._id,
                seller_name: item.username
            })
        })
        res.status(200).send(dataToSend)
    }
    catch (err) {
        console.log(err)
        res.status(500).send({
            messege: "something went wrong"
        })
    }
}




exports.seller_catalog = async (req, res) => {

    try {
        const _id = req.params.seller_id;
        const data = await catalogs.findById({ _id })
        const dataToSend = data.product_id.map(async (item) => {
            return await products.findById({ _id: item })

        })
        res.status(200).send(dataToSend)
    }
    catch (err) {
        console.log(err)
        res.status(500).send({
            messege: "something went wrong"
        })
    }
}






exports.create_order = async (req, res) => {

    try {
        const _id = req.params.seller_id;
        const list_of_items = req.body.list_of_items;
        const data = await catalogs.findById({ _id })
        const newOrder = new orders({seller_id:_id,items:list_of_items,catalog_id:data._id,buyer_id:req._id})
        await newOrder.save();
        res.status(200).send({message:"order has been created succesfuly"})
    }
    catch (err) {
        console.log(err)
        res.status(500).send({
            messege: "something went wrong"
        })
    }
}


