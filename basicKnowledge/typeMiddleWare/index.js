const express = require('express');
const app = express();
const reqFilter = require("./middleware")
const route = express.Router()
// middleware
// const reqFilter=(req, resp, next) =>{
//     console.log('reqFilter')
//     if(!req.query.age){
//         resp.send("Please provide age")
//     }else if(req.query.age < 18){
//         resp.send("can't access")
//     }else{
//      next()
//     }
//     // next() // we need to call next to relode the page
// }
// application route start - > its apply for all the applaication

// app.use(reqFilter)

// app.get('/', (_, res)=> {
//    res.send('welcome to home page')
// }) 

// app.get('/user', (req, res)=>{
//     res.send('welcome to user page')
// })

// application route end

// single route midleware start

// app.get('/', (_, res)=> {
//    res.send('welcome to home page')
// }) 

// app.get('/user',reqFilter, (req, res)=>{
//     res.send('welcome to user page')
// })
// app.get('/about',reqFilter, (req, res)=>{
//     res.send('welcome to about page')
// })

// or 
// if i want to apply middleware,
//then i need to use route.get() otherwise app.get()

route.use(reqFilter)
app.get('/', (_, res)=> {
   res.send('welcome to home page')
}) 

app.get('/user', (req, res)=>{
    res.send('welcome to user page')
})
route.get('/about',reqFilter, (req, res)=>{
    res.send('welcome to about page')
})
route.get('/contact',reqFilter, (req, res)=>{
    res.send('welcome to contact page')
})
app.use('/', route)

app.listen(5000)