// const fs = require('fs')
// const path = require('path')
// const dirPath= path.join(__dirname, 'demo4')
// for(i=0; i<5; i++){
//     fs.writeFileSync(dirPath + "/hello" + i + ".txt", "a simple text file")
// }

// fs.readdir(dirPath, (err, files) => {
//     // console.log(files)
//     files.forEach((item) =>{
//         console.log(item)
//     })

// })


const fs = require('fs')
const path = require('path')
const dirPath= path.join(__dirname, 'demo4')
const filePath = `${dirPath}/hello.txt`

// for(i=0; i<5; i++){
//     fs.writeFileSync(filePath, "a simple text file")
// }

// fs.readFile(filePath, 'utf8', (err, item) =>{
//    console.log(item)
// })

// fs.appendFile(filePath, 'file is updated', (err) =>{
//     if(!err) console.log("file is updated")
// })

fs.rename(filePath, `${dirPath}/fruit.txt`, (err)=> {
    if(!err) console.log("file name is updaed")
})

// fs.unlinkSync(`${dirPath}/fruit.txt`)  to delete file

// what is buffer => temporary memory location ,
// node js need to some space to ren the code