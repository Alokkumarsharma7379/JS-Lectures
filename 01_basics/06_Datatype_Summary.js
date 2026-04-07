// Primptive
// 7 type : string, Number, Boolean, symbol, Bigint, null, undefined
const score = 100
const scoreValue = 200.4
// hear both comes under number (no concept of floot)

const isLoggedin = false
let userEmail; // undefined

const id = Symbol('123')
const anotherid = Symbol('123')
console.log(id === anotherid)

// Refrence (Non primitive)
// Array, Objects, Functions
const heros = ["shaktiman","naagraj","doga"]  // Array
let myObj={
    name:"Alok",
    age:22,
}

const myfunction = function(){
    console.log("Hello world");
}

console.log(typeof myfunction)