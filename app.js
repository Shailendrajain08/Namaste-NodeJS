// require("./xyz"); //one module into another
// const obj = require("./sum")  // first way to do import with multiple modules
// const {calculateSum, calculateSub} = require("./calculate/sum") ; // second way to do import with multiple modules (more common)

// var myName = "Shailendra Jain"

// console.log(myName)

// obj.calculateSum(10, 2)  // first way to call multiple modules
// obj.calculateSub(12, 16) // first way to call multiple modules

// calculateSum(10, 2) // second way to call multiple modules (more common)
// calculateSub(12, 16) // second way to call multiple modules (more common)


// --------------------------------------------------------------------------------- 

const { calculateSum, calculateSub, calculateMultiply } = require("./calculate/index");
const data = require("./data.json")
const util = require("node:util")

console.log(data)
let a = 10
let b = 20

calculateSum(a, b)
calculateSub(a, b)
calculateMultiply(a, b)