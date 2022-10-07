// let p = new Promise((resolve, reject) => {
//     let sum = 1 + 2;
//     if(sum == 2){
//         resolve("correct")
//     }else{
//         reject("wrong")
//     }
// })

// p.then((message) => {
//     console.log("This is in the then - " +message)
// }).catch((message) => {
//     console.log("This is in the catch - " +message)
// })

// ----------------fetch using json file-----------------------

// function jFetch(){
//     fetch("index.json")
        // .then((response) => {console.log(response)})
// }

// jFetch();

// ----------------fetch using json file-----------------------

function jFetch(){
    fetch("index.json")
        .then((response) => response.json())
        .then((data) => {console.log(data)})
}

jFetch();