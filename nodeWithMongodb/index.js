const dbConnect = require('./mongodb')
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


