const prompt = require('prompt-sync')({sigint: true});

/*prompt-sync
user imput *2

*/

let num = Number(prompt(`Enter a number <50 `))


while(num <= 100){
    num = num * 2
    console.log(num)
}

