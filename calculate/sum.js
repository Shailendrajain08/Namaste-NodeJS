// Modules Protectes their variables and functions from leaking


function calculateSum (a, b) {
    const sum = a + b;
    
    console.log(sum)
}

function calculateSub (c, d) {
    const sub = d - c; 
    console.log(sub)
}

module.exports = {
    calculateSum : calculateSum,
    calculateSub : calculateSub
}    
