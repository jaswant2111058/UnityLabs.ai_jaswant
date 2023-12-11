# Node.js Express REST API

## Introduction
This Node.js Express application provides a set of REST API endpoints facilitating interactions between buyers and sellers. Users can register and log in, sellers can build catalogs, buyers can retrieve lists of sellers, access specific seller catalogs, and create orders. Sellers can also view a list of orders they've received.


## Entities
### Users
* Two types: buyers and sellers
* Users can register as buyers or sellers
* Endpoint: POST /api/auth/register
* Endpoint: POST /api/auth/login
### Catalogs
* Belong to a seller
 * One seller can have one catalog
* Consists of products
* Endpoint: POST /api/seller/create-catalog
* Products
* Have a name and a price
* Part of a catalog
* Endpoint: N/A
### Orders
* Created by buyers to purchase items from a seller's catalog
* Consists of a list of products
* Endpoint: POST /api/buyer/create-order/:seller_id
* Endpoint: GET /api/seller/orders
* API Endpoints
* Auth APIs
* Register a User
* Endpoint: POST /api/auth/register
* Description: Register a user (accepts username, password, and * * user type - buyer/seller).
### Log In
* Endpoint: POST /api/auth/login
* Description: Log in a previously registered user (retrieve authentication token).
### APIs for Buyers
* Get List of Sellers
* Endpoint: GET /api/buyer/list-of-sellers
* Description: Retrieve a list of all sellers.
* Get Seller's Catalog
* Endpoint: GET /api/buyer/seller-catalog/:seller_id
* Description: Get the catalog of a specific seller by seller_id.
* Create Order
* Endpoint: POST /api/buyer/create-order/:seller_id
* Description: Send a list of items to create an order for a seller with id = seller_id.
### APIs for Sellers
* Create Catalog
* Endpoint: POST /api/seller/create-catalog
* Description: Send a list of items to create a catalog for a seller.
* Get Seller's Orders
* Endpoint: GET /api/seller/orders
* Description: Retrieve the list of orders received by a seller.
## Getting Started
* Clone the repository: git clone https://github.com/jaswant2111058/UnityLabs.ai_jaswant.git
* Install dependencies: npm install
* Start the server: npm start
* At port No. http://localhost/5000 
### Technologies Used
* Node.js
* Express.js
* Mongoose (for MongoDB interactions)