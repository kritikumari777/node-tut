const dbConnect = require('./mongodb')

const insertFun = async () =>{
    const db = await dbConnect()
    const res = await db.insertMany( // insertOne()
        [{name: "note 5", brand: "apple", price:'320', catagory: "mobile"},
         {name: "note 2", brand: "vivo", price:'920', catagory: "mobile"},
         {name: "note 5", brand: "vivo", price:'720', catagory: "mobile"},
         {name: "note 3", brand: "apple", price:'320', catagory: "mobile"},
        ]
    )
    if(res.acknowledged){
        console.log("data inserted")
    }
}

insertFun()