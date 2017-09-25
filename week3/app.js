var points = 0;

var answer1 = document.getElementById("60");
var wrong1 = document.getElementsByClassName("wrong1");
var message1 = document.getElementById("message1");
var point1 = 0;
var answer2 = document.getElementById("dog");
var wrong2 = document.getElementsByClassName("wrong2");
var message2 = document.getElementById("message2");
var point2 = 0;
var answer3 = document.getElementById("five");
var wrong3 = document.getElementsByClassName("wrong3");
var message3 = document.getElementById("message3");
var point3 = 0;

var points = point1 + point2 + point3;


answer1.onclick = function() {
    point1 = 1;
    message1.innerText = "";
}

for (let i=0; i < wrong1.length; i++) {
    wrong1[i].onclick = function () {
        message1.innerText = "Don't forget the order of operations.";
    }
}

answer2.onclick = function() {
    point2 = 1;
    message2.innerText = "";
}

for (let i=0; i < wrong2.length; i++) {
    wrong2[i].onclick = function () {
        message2.innerText = "Try again!";
    }
}

answer3.onclick = function() {
    point3 = 1;
    message3.innerText = "";
}

for (let i=0; i < wrong3.length; i++) {
    wrong3[i].onclick = function () {
        message3.innerText = "Are you sure that's correct?";
    }
}

submit.onclick = function() {
	var submit = document.getElementById("submit");
    
   
	var message = document.getElementById("message");
    
    message.innerText = "You've gotten " + points + " out of 3 correct, your score is " + 100/3*points;
    
};                          
