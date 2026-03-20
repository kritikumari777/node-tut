const mongoose = require("mongoose")

// const main = async () => {
//     await mongoose.connect("mongodb://localhost:27017/e-comm")

//     const ProductSchema = new mongoose.Schema({
//         name : String,
//         price: Number,
//         products: String,
//         category: String
//     })

//     const ProductModule = mongoose.model("products", ProductSchema)

//     let data = new ProductModule({name: "m8", price: "100", products:"iphone", category:"vivo"})
//     let result = await data.save()
//     console.log(result)
// }
// main()

mongoose.connect('mongodb://localhost:27017/e-comm')

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    Products:String,
    category: String
})

const saveInDb = async () => {
    const ProductModule = mongoose.model('products', productSchema)
    let data = new ProductModule({
        name: "note Pro",
        price: 250,
        products: "max",
        category: "Mobile"
    })

    const result = await data.save()
    console.log(result)
}
// saveInDb()

const updateInDb = async () => {
    const products = mongoose.model('products', productSchema)
    const data = await products.updateOne(
        {name: "m8"},
        {$set : {price: "300", name: "max 8"}}
    )
    console.log(data)
}
// updateInDb()

const deletInDb = async () => {
    const products = mongoose.model('products', productSchema)
    const data = await products.deleteOne({name: "max 8"})
    console.log(data)
}
// deletInDb()

const findInDb = async () => {
    const products = mongoose.model('products', productSchema)
    // const data = await products.find() ---------------to find all data
    const data = await products.find({name: "m8"})
    console.log(data)
}
// findInDb()