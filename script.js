// arr = [1, 2, 3, 4, 5, 6, 7];

// arr.splice(0);

// console.log(arr)


// foreach

// for each loop array par lagta hai. For each loop har bar array ke har element ke liye chalta hai aur kuch same task perform krta  hai.

// arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// arr.forEach(function (val) {
//     console.log(val + "/1")

// })

// forin Loop

// for in loop object par lagta hai. For in loop har object ke har element par run hota hai aur object ki key value pair ko acces kr sakta hai.

// obj = {
//     name: "Ali",
//     city: "Lahore",
//     country: "Pakistan",
//     age: "19"
// }
// for (let key in obj) {
//     console.log(key, obj[key])
// }

// Truthy Falsy
// Falsy Values are 0 false undefined null NaN document.all


// if (true) {
//     console.log("True")
// } else {
//     console.log("False")
// }

// Falsey values are:- 0 false undefined null NaN document.all


// Browser Context API
// Stack
// Heap Memory
// Execution Context
// Lexical Environment
// Spread Operator
// Truthy Falsy
// ForEach Loop
// For in Loop
// Do While Loop
// Callback Functions
// First Class Functions
//
//



// Click on button, to call the function
// Keys Control box game
// let mainFunc = () => {
//     let a = [1, 12, 13, 21, 31, 12, 3213, 112, 13, 71, 81, 14, 73];
//     let b = [...a];
//     b.pop();
//     b.forEach(val => {
//         val + 100;
//         let Palindrime = function (u) {
//             return u === Number(u.toString().split("").reverse().join(""));
//         }
//         let result = Palindrime(0);
//         console.log(result)

//     });
// }

// setTimeout(() => {
//     mainFunc();
// }, 3000);

// let aasdf = function (c) {

//     let btn = document.getElementById("center-container");
//     btn.addEventListener("click", () => {
//         // val = 0
//         c + 1;
//     })
// }
btn.addEventListener("click", () => {
    let clicks = 0
    function clickFunc() {
        clicks += 1
        let btn = document.getElementById("center-container") = clicks

        console.log(btn)
    }
    clickFunc()
})


// console.log(aasdf(10))