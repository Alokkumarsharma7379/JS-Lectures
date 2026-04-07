// Stack(Primitive)  ,  Heap(Non-Primitive)


// Stack
let myYouTubeName = "alokdotcom"
let anotherName = myYouTubeName
anotherName = "chaiaurcode"
console.log(myYouTubeName)  // alokdotcom
console.log(anotherName)    // chaiaurcode


// Heap
let user1 = {
    email : "user@gmail.com",
    upi : "user@sbi"
}
let user2=user1
user2.email = "hitesr@gmail.com"
console.log(user1.email)  // hitesr@gmail.com
console.log(user2.email)  //hitesr@gmail.com