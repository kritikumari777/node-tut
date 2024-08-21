const dbConnect = require("./mongodb")

const updateFun = async () => {
    let db = await dbConnect()
    let res = await db.updateOne(
        {name: 'pp 04'}, {$set : {name: "max pro 5", price: 550}}
    )
    let result = await db.updateMany(
        {name: 'note 3'}, {$set : {name: "moto 5", price: 700}}
    )
    console.log(result)
}

updateFun()