var points = 0;

var answer1 = document.getElementById("60");
var wrong = document.getElementsByClassName("wrong");
var message1 = document.getElementById("message1");
var point1 = 0;


answer1.onclick = function() {
    point1 = 1;
    message1.innerText = "";
}

for (let i=0; i < wrong.length; i++) {
    wrong[i].onclick = function () {
        message1.innerText = "Are you sure that's correct?";
    }
}


submit.onclick = function() {
	var submit = document.getElementById("submit");
    
   
	var message = document.getElementById("message");
    
    
    
};                          
