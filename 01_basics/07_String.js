const name = "alok"
const repocount = 50
// console.log(name + repocount + " Value")

console.log(`Hello my name is ${name} and my repo count is ${repocount}`);

const gameName = new String('hitesh-hc')

console.log(gameName[0])
console.log(gameName.__proto__)
console.log()
console.log(gameName.length) // to get the length of string
console.log()
console.log(gameName.toUpperCase()) // it convert in uppercase but it does not changes original string
console.log()
console.log(gameName.charAt(2)) // 2nd position par kya h?
console.log()
console.log(gameName.indexOf('t')) // t kis position par h?
console.log()

const newString = gameName.substring(0,4)
console.log(newString)
console.log()

const anotherString = gameName.slice(-8,4)
console.log(anotherString)
console.log()

const newStringOne = "   Alok    "
console.log(newStringOne)
console.log(newStringOne.trim())   // Removes spaces fron string from both ends

const url = "https://hitesh.com/hiotesh%20choudhary"
console.log(url.replace('%20','-'))   // kya replace karna h, kisse replace karna h
console.log(url.includes('hitest'))  // hitesh present h ki nhi


// convert string to array based on split by given charcter
console.log(gameName.split('-'))  // split based on -
