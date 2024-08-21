const dbConnect = require('./mongodb')

const deleteFun = async () => {
    let db = await dbConnect()
    let res = await db.deleteMany(
    {name: "note 2"}
    )
    console.log(res)

    if(res.acknowledged){
        console.log('record deleted')
    }
}

deleteFun()