const express = require('express');
const app = express();

// middleware
const reqFilter=(req, resp, next) =>{
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

app.use(reqFilter)

app.get('/', (_, res)=> {
   res.send('welcome to home page')
}) 

app.get('/user', (req, res)=>{
    res.send('welcome to user page')
})

app.listen(5000)