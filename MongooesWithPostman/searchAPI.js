const express = require('express')
require('./config')
const products = require('./products')

const app = express()
app.use(express.json())

app.get('/search/:key', async(req , res) => {
    const data = await products.find({
        "$or": [
            {"name": {$regex :req.params.key}},
            {"products": {$regex : String(req.params.key)}}
            // if I want to search with price I must store price as a string in db
            //  or I have to add extra formatting to change that into String.
        ]
    })
    console.log(data)
    res.send(data)
})

app.listen(5000)