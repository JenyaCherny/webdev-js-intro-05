"use strict";

const todos = [
    "Wash the dishes",
    "Clean the gutters",
    "Mow the yard",
    "Do some coding",
    "Rake the leaves",
];

// Declare your two immutable variables
let shiftValue;
let popValue;

// Declaring constant variables to store references to the elements
// that will be updated by your code.
const answerOneEl = document.getElementById("answer-one");
const answerTwoEl = document.getElementById("answer-two");
const answerThreeEl = document.getElementById("answer-three");
const answerFourEl = document.getElementById("answer-four");
const answerFiveEl = document.getElementById("answer-five");
const answerSixEl = document.getElementById("answer-six");
const submissionBtn = document.getElementById("submission-btn");

/*console.log(todo.join(','));   #1
 console.log(todo[2]);           #2
 let popValue = todo.pop(); console.log(popValue); #3
 console.log(todo);              #4
 todo.reverse();                 #5
 console.log(todo);              #6
 let shiftValue = todo.shift(); console.log(shiftValue); #7
 todo.push(shiftValue); todo.push(popValue);             #8
 console.log(todo);              #9
*/
// Question- if I have to write code answers to the functions below, there is answer 3, 7, 8, 9 would be missing. Not sure why we need functions for this exercise.
function updateAnswerOne() {
    
}

function updateAnswerTwo() {
   
}

function removeLastValue() {

}

function removeFirstValue() {

}

function addShiftAndPopValues() {
    
}

function updateAnswerFour() {

}

function reverseTodoList() {

}

function updateAnswerFive() {

}

function updateAnswerSix() {

}

function render() {

}

submissionBtn.addEventListener("click", function () {
    // Update this function
    render();
});
