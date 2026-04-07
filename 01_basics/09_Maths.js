console.log(Math)
console.log(Math.abs(-4))

console.log(Math.round(4.2))
console.log(Math.round(4.6))
console.log(Math.round(4.5))

console.log(Math.ceil(4.2))

console.log(Math.floor(4.9))

console.log(Math.min(4,3,6,8))
console.log(Math.max(4,3,6,8))

console.log(Math.random())  // randomly 0 and 1 ke beech koi bhi number
console.log(Math.random()*10)  // agar hme 0 and 10 ke beech koi bhi number chahiye toh multiply by 10
console.log((Math.random()*10)+1) // but agar 0.001332 type me kuchh aaya toh hme 0.013 karke milega toh agar 1 se bada chahiye toh +1 kar do
console.log(Math.floor(Math.random()*10)+1) // agar hme decimal me nhi chahiye toh floor use kar lo

const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max - min + 1)) + min)