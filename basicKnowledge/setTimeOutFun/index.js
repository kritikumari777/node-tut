let a=10;
let b=5

// setTimeout(() => {
//     b= 30
//   }, 2000);
// console.log(b) 

// o/p - 5 
// it is the drowback of async function 
// because its take time to update the value so its printing old value
// we can resolve this by calback fun and Promish


let waitingData = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(30)  
    }, 2000);
})

waitingData.then((data) =>{
    b=data;
    console.log(b)
})