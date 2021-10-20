// call back, function passed into another function and is called by that function

const person = require("./person");

function addNumbers (a,b) {
    if (!typeof a =='number' && !typeof b == 'number') return;
    return a+b;
}

let numbers = [1,2,3,4,5,6,7,8,9,10]

let sum = numbers.reduce(addNumbers)


// blocking
// setTimeout(() => console.log('I have completed executing'), 3000)
console.log(sum)


async function hello() {
    // console.log('hi');
    return 'Armstrong'
}

// setTimeout(hello, 3000)
hello()

// hello()
//    .then(res => res)
//    .then(res => console.log(res.toUpperCase()))
//    .catch(error => console.error(error))
// 
// let logName = async () =>{
//    let myName = await hello()
//    return myName;
// }
 

// logName()


// function a () {
//     console.log('AM A')  
// }

// function b () {
//     a()
// }

// function c () {
//     b();
// }


// why callbacks

// without callbacks
const Profile = {
    username: 'souljah',
    firstName: 'Armstrong',
    lastName: 'Muhwezi',
    age: 23
}

function processFullName() {
     return Profile.firstName + ' '+ Profile.lastName;
}

let fullName = processFullName()


// with callbacks 
function processData(callback, data) {
    callback(data)
}

function getAge(profile) {
    console.log(profile.age)
}

processData(getAge, Profile);


// fetch('https://jsonplaceholder.typicode.com/todos/1')
fetch('https://jsonplaceholder.typicode.com/todos/1')
   .then(function(response) {
       return response.json()
   })
   .then(function(json) {
       console.log(json)
   })
   .catch(function(error) {
       console.error(error)
   })
  
