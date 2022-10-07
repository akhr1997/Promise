let p = new Promise((resolve, reject) => {
    let sum = 1 + 2;
    if(sum == 2){
        resolve("correct")
    }else{
        reject("wrong")
    }
})

p.then((message) => {
    console.log("This is in the then - " +message)
}).catch((message) => {
    console.log("This is in the catch - " +message)
})