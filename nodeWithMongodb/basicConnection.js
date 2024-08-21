const {MongoClient} = require('mongodb'); //or
// const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017'
const database = 'e-comm'
const client = new MongoClient(url)

// async function getData(){
//     let result = await client.connect()
//     let db = result.db(database)
//     let collection = db.collection('products')
//     // let response = await collection.find({}).toArray();
//     let response = await collection.find({name: 'm 04'}).toArray();
//     console.log(response)
// }
// getData()

async function dbConnect(){
    let result = await client.connect()
    let db = result.db(database)
    return db.collection('products')
    // let response = await collection.find({}).toArray();
    // let response = await collection.find({name: 'm 04'}).toArray();
    // console.log(response)
}
// console.warn(dbConnect())

// dbConnect().then( (resp) => {
//    resp.find().toArray().then((data) => {
//     console.warn(data)
//    })
// })

const main = async () =>{
   let data = await dbConnect()
   data = await data.find().toArray();
   console.log(data)
}
main()


