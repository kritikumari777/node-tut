const express= require('express')
const EventEmitter = require('events')
const app = express()

const event = new EventEmitter() // create an object

let count = 0 
event.on("Count Api" , () => {  // (Count Api)
    count++
    console.log("Event Call", count)
})

app.get("/", (req , res) => {
    res.send('Home api call')
    event.emit("Count Api", count)   // (Count Api)
})

app.get('/update', (req, res) => {
    res.send('Update Api call') 
    event.emit('Count Api', count) // (Count Api)
})

app.get('/find', (req, res) =>{
    res.send('Find api call')
    event.emit("Count Api", count) // Node.js EventEmitter is case-sensitive (Count Api) , 
    // heat defferent event on  event.emit("count API", count)
})

app.listen(5000)
