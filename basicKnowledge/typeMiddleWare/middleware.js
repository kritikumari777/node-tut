module.exports = reqFilter=(req, resp, next) =>{
    console.log('reqFilter')
    if(!req.query.age){
        resp.send("Please provide age")
    }else if(req.query.age < 18){
        resp.send("can't access")
    }else{
     next()
    }
    // next() // we need to call next to relode the page
}