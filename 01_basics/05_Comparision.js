// console.log(2 > 1)
// console.log(2 < 1)
// console.log(2 >= 1)
// console.log(2 <= 1)
// console.log(2 == 1)
// console.log(2 != 1)


// Note: This type of conversion leads to confusion so try to avoid it. 
console.log("2" > 1);     // output True
console.log("02" > 1);    // output True
console.log()

console.log(null > 0);    // false
console.log(null == 0)    // false
console.log(null >= 0)    // true
console.log()   

console.log(undefined > 0);    // false
console.log(undefined == 0)    // false
console.log(undefined >= 0)    // false
console.log()
//  in Java Script comparision and equality check both are diffrent

// strict check  ===
// this check both value and datatype
console.log("2" === 2)