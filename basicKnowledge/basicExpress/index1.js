  const express = require('express');
  const app = express()
  //get is a method that provide routes
  app.get('', (req, res) =>{
    // console.log("data sent by browser", req.query)
    res.send('<h1>This is Home Paage</h1>')
  }
)
  app.get('/about', (req, res) =>{
    // res.send('this is about page')
    res.send(`
      <input type="text" placeholder="name" value="${req.query.name}"/>
      `)
  }
)
  app.get('/help', (req, res) =>{
    // res.send('this is help page')
    res.send({
      name: 'kriti',
      email:"kriti@gmail.com"
    })
  }
)

app.listen(5000)