
// imporent method get, post-send, put - update, delet

// we cant pass body in get , we can pass quary parms


const express = require('express')
const dbConnect =  require('../nodeWithMongodb/mongodb')
const app = express()
const mongodb = require('mongodb')
app.use(express.json()) //to get data from postman

// get method
app.get('/' , async (req, resp) =>{
    let data = await dbConnect();
    data = await data.find().toArray();
    console.log(data)
    resp.send(data)
})

//post mathod

app.post('/', async (req, resp) =>{
    let data = await dbConnect()
    let result = await data.insertOne(req.body)
    resp.send(result)
})

// put mathod 

// app.put('/', async (req, resp) => {
//     let data = await dbConnect()
//     let result = data.updateOne(
//       {name: "nokia 1011"},
//       {$set: {brand: "nokiya set"}},
//     )
//     resp.send(result)
// })

//if I want to change name i can change throw quary parma
// I can update by passing http//localhost:5000/phone 13 throw postmane

app.put("/:name", async (req, resp) => {
   let data = await dbConnect()
   let result =  data.updateOne(
    {name: req.params.name},
    {$set:req.body})
    resp.send({result:"update"})
})

// delete
// from postmane
// app.delete("/:id", (req, resp) => {
//   console.log(req.params.id)
//   resp.send("done")   
// })

app.delete("/:id", async (req, resp) => {
    console.log(req.params.id)
    const data = await dbConnect()
    const result = await data.deleteOne({_id: new mongodb.ObjectId(req.params.id)})
    resp.send("done")
})

app.listen(5000)

