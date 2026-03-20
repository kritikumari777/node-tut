const express = require('express')
const path =  require('path')
const multer = require('multer')
const app = express()

const upload = multer({
    storage : multer.diskStorage({
        destination  : function (req, file, cb) {
            const uploadPath = path.join(__dirname, "uploads")
            cb(null, uploadPath)
        },
        filename : function(req , file, cb){
          const ext = path.extname(file.originalname)
          cb(null, file.fieldname + "_" + Date.now() + ext)  
        }
    })
}).single("user_file")

app.post('/upload', upload,  async(req , res) => {
    res.send("file uploaded")
    console.log("Uploaded")
})

app.listen(5000)