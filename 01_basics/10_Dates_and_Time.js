// Date
let myDate = new Date()
console.log(typeof myDate) // Object
console.log(myDate)   // 2026-04-07T20:30:16.178Z
console.log(myDate.toString()) // Tue Apr 07 2026 20:30:16 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()) // Tue Apr 07 2026  //**returns a Date as a string value**
console.log(myDate.toTimeString()) // 20:33:00 GMT+0000 (Coordinated Universal Time) //Returns a time as a string value.
console.log(myDate.toISOString()) // returns a date as a string value in ISO format //2026-04-07T20:34:04.721Z
console.log(myDate.toLocaleString()) //4/7/2026, 8:35:06 PM

let myCreatedDate = new Date(2026, 0, 18)  // months start with 0
console.log(myCreatedDate.toDateString())

let myCreatedDate1 = new Date(2026, 0, 18, 8, 3)  // last me time bhi add kar diya YYYY,MM,DD,HH,MM,SS  ye formate hota h
console.log(myCreatedDate1.toLocaleString())

let myCreatedDate2 = new Date("1-10-2004")
console.log(myCreatedDate2.toLocaleString())

let myTimeStamp = Date.now()
console.log(myTimeStamp)   // 1st jan 1970 se abhi tak jo time h usko mili sec me dega
console.log(myCreatedDate.getTime()); // mere created date se abhi tak ka time in milli second
console.log(Math.floor(Date.now()/1000))  // seconds me time dega milli sec me nhi

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1)
console.log(newDate.getDay())

newDate.toLocaleString('default',{
    weekday:"long",
})