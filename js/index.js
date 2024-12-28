// Prevent us from attempting to use variables
// that are not declared
"use strict"

let gameList = ["White Elefant", "Mr and Mrs Smith", "Fanty", "Funny News"];
console.log(gameList);
console.log(gameList[0]);
console.log(gameList[2]);
console.log(typeof gameList);

gameList.shift();
console.log(gameList);

gameList.push("Riddles");
console.log(gameList);

let numberLucky = [20, 21, 22, 23, 24, 25];
console.log(numberLucky);
console.log(typeof numberLucky);
numberLucky.push(26);
console.log(numberLucky);
