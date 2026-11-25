// Functions

// Functions start with "function" keyword
// They also take parameters
// When you call the function, you give it arguments
// Inside the function, you can whatever code you want

// function sayHello() {
//     console.log("Hello")
// }

// sayHello() // function invocation

// function add(num1, num2) {
//     return num1 + num2
// }

// console.log(add(3, 7))

// function sub(num1, num2) {
//     return num1 - num2
// }


// function greeting(name, age, city) {
//     console.log(`Hi my name is ${name} and I am ${age} years old and I live in ${city}`)
// }

// greeting("Mohamed", 25, "Mpls")
// greeting("Fadumo", 22, "London")

// Arrow Function, different way to right the same function
// Arrow functions were introduced in 2015

// function add(num1, num2) {
//     return num1 + num2
// }

// const add = (num1, num2) => {
//     return num1 + num2
// }

// console.log(add(6, 10))


// function greeting(name, age, city) {
//     console.log(`Hi my name is ${name} and I am ${age} years old and I live in ${city}`)
// }

const greeting = (name, age, city) => {
  console.log(`Hi my name is ${name} and I am ${age} years old and I live in ${city}`)  
}

greeting("Idil", 20, "London")