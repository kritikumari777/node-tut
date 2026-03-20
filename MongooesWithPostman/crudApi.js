const express = require('express')
require("./config")
const Products = require("./products")

const app = express()
app.use(express.json())

app.post("/create", async (req, res) => {
    const data = new Products(req.body)
    const result = await data.save()
    console.log(result)
    res.send(result)
})

app.get('/list', async (req, res) => {
    const data = await Products.find()
    res.send(data)
    console.log(data)
})

app.delete("/delete/:_id", async (req, res) => {
    console.log(req.params) // object value
    const data = await Products.deleteOne(req.params)
    res.send(data)
    console.log(data)
})

app.put("/update/:_id", async (req, res) => {
    console.log(req.params)
    let data = await Products.updateOne(
        req.params, // object olrady
        { $set: req.body }
    )
    res.send(data)
    console.log(data)
})

app.listen(5000)  