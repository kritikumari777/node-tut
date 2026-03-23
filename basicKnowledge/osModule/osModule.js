const os = require("os")
console.log(os.arch())  // x64 bit
console.log(os.freemem()/(1024*1024*1024)) // 1 GB
console.log(os.totalmem()/(1024*1024*1024)) // 7 GB almost 8 GB some are used by system
console.log(os.hostname()) //DESKTOP-VNIR7A7
console.log(os.platform()) // win32 operating system
console.log(os.userInfo()) // admin about user information


