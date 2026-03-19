const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
    name: String,
    price: Number,
    products: String,
    category: String,
})

module.exports =  mongoose.model('products', ProductSchema)