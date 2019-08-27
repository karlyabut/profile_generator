const readline = require('readline');
const rl = readline.createInterface({
 input: process.stdin,
 output: process.stdout
});
let array = [];
rl.question("What's your name? Nicknames are also acceptable :)", (answer) => {
 array.push(answer);
 rl.question("What's an activity you like doing?", (answer) => {
   array.push(answer);
   rl.question("What do you listen to while doing that?", (answer) => {
     array.push(answer);
     rl.question("Which meal is your favorite (eg: dinner, brunch, etc.)", (answer) => {
       array.push(answer);
       rl.question("What's your favorite thing to eat for that meal?", (answer) => {
         array.push(answer);
         rl.question("Which sport is your absolute favorite?", (answer) => {
           array.push(answer);
           rl.question("What is your superpower? In a few words, tell us what you are amazing at!", (answer) => {
             array.push(answer);
             console.log(`${array[0]} loves ${array[1]} while listening to ${array[2]}, devouring ${array[4]} for ${array[3]}, prefers ${array[5]} over any sport, and is amazing at ${array[6]}.`);
             rl.close();
           })
         })
       })
     })
   })
 })
})