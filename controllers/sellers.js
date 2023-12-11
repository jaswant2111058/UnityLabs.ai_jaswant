const users = require("../Entities/users");
const orders = require("../Entities/orders");
const catalogs = require("../Entities/catalogs");
const products = require("../Entities/products");

// Get list of sellers
exports.list_of_sellers = async (req, res) => {
    try {
        const data = await users.find({ userType: "seller" });

        // Transforming data to send to the client
        const dataToSend = data.map((item) => ({
            seller_id: item._id,
            seller_name: item.username
        }));

        res.status(200).send(dataToSend);
    } catch (err) {
        console.log(err);
        res.status(500).send({
            message: "Something went wrong"
        });
    }
};

// Get catalog of a specific seller
exports.seller_catalog = async (req, res) => {
    try {
        const _id = req.params.seller_id;
        const data = await catalogs.findById({ _id });

        // Fetching product details for each product in the catalog
        const dataToSend = await Promise.all(
            data.product_id.map(async (item) => await products.findById({ _id: item }))
        );

        res.status(200).send(dataToSend);
    } catch (err) {
        console.log(err);
        res.status(500).send({
            message: "Something went wrong"
        });
    }
};

// Create a new order
exports.create_order = async (req, res) => {
    try {
        const _id = req.params.seller_id;
        const list_of_items = req.body.list_of_items;
        const data = await catalogs.findById({ _id });

        // Creating a new order and saving it
        const newOrder = new orders({
            seller_id: _id,
            items: list_of_items,
            catalog_id: data._id,
            buyer_id: req._id
        });

        await newOrder.save();

        res.status(200).send({ message: "Order has been created successfully" });
    } catch (err) {
        console.log(err);
        res.status(500).send({
            message: "Something went wrong"
        });
    }
};
