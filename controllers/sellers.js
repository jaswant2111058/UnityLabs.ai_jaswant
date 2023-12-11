const users = require("../Entities/users");
const orders = require("../Entities/orders");
const catalogs = require("../Entities/catalogs");
const products = require("../Entities/products");

// Controller for creating a new catalog
exports.create_catalog = async (req, res) => {
    try {
        const list_of_items = req.body.list_of_items;

        // Validate the format of list_of_items (assuming it should be an array)
        if (!list_of_items || !Array.isArray(list_of_items)) {
            return res.status(400).send({ message: "Invalid list_of_items format" });
        }

        // Create a new catalog with the seller's ID and the provided items
        const newCatalog = new catalogs({ seller_id: req._id, items: list_of_items });

        // Save the new catalog to the database
        await newCatalog.save();

        res.status(200).send({ message: "New catalog has been created" });
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: "Something went wrong" });
    }
};

// Controller for fetching orders of a specific seller
exports.orders = async (req, res) => {
    try {
        // Find orders in the database based on the seller's ID
        const data = await orders.find({ seller_id: req._id });

        res.status(200).send(data);
    } catch (err) {
      
        console.error(err);
        res.status(500).send({ message: "Something went wrong" });
        
    }
};
