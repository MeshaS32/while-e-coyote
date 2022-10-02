const prompt = require('prompt-sync')({sigint: true});

/*
prompt
get imput from the user
while loop- allows user to imput multiple numbers
-print the sum at the end
variable to hold the sum
+= to add to sum
reprompt inside while loop

*/

let Question = Number(prompt(`Enter some numbers(type 0 when complete): `))

let num = 0
let sum = 0


while(num >= 0){
    console.log(sum)
    sum = sum + num
    num = Number(prompt(`> `));
       
    return sum++
}
console.log(sum)