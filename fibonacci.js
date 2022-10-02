const prompt = require('prompt-sync')({sigint: true});


console.log("How many values would you like to return? ")

let n = Number(prompt(`Enter a value of n:  `))

let num1 = 0
let num2 = 1
let sum = Number()
let count = 0


while(count < n){
   if(count === 0){
console.log(num1)
} else if(count === 1){
   console.log(num2)
} else {
   sum = num1 +num2
   console.log(num1 + num2)
   num1 = num2
   num2 =sum
   }
    count++
} 

 
