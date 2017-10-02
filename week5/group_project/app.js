    theclick1();
    theclick2();
    theclick3();
    theclick4();
    theclick5();

click1.onclick = function() {   
    theclick1();   
};    

click2.onclick = function() {   
    theclick2(); 
};    

click3.onclick = function() {   
    theclick3();  
};    

click4.onclick = function() {  
    theclick4();   
};    

click5.onclick = function() {  
     theclick5(); 
};    
    
function theclick1 () {
    var click1 = document.getElementById("click1")
    
    var message1 = ["an object","an interaction","a website","a service","an image","an app","an experience","an installation","a technology","a brand","a concept","a book"];
    
    var answer1 = document.getElementById("answer1");
    
    var display1 = message1[Math.floor(Math.random() * message1.length)];
    
    answer1.innerText = display1;  
}

function theclick2() {
    var click2 = document.getElementById("click2")
    
    var message2 = ["circles","African fashion","squares","dots", "furniture", "cameras","natural materials","senior citizens","Eastern medicine","guns","healthcare","curves"];
    
    var answer2 = document.getElementById("answer2");
    
    var display2 = message2[Math.floor(Math.random() * message2.length)];
    
    answer2.innerText = display2;  
}

function theclick3() {
    var click3 = document.getElementById("click3")
    
    var message3 = ["trusting","chaotic","approachable","discrete","tactical","collaborative","immersive","a family","paradigm shifting","overlapping","contrasting","responsive"];
    
    var answer3 = document.getElementById("answer3");
    
    var display3 = message3[Math.floor(Math.random() * message3.length)];
    
    answer3.innerText = display3; 
}

function theclick4() {
    var click4 = document.getElementById("click4")
    
    var message4 = ["forms","brand touchpoints","patterns","wireframes","textures","materials","VR simulations","hardware hacks","concept sketches","personas","buttons","layouts"];
    
    var answer4 = document.getElementById("answer4");
    
    var display4 = message4[Math.floor(Math.random() * message4.length)];
    
    answer4.innerText = display4;
}

function theclick5() {
    var click5 = document.getElementById("click5")
    
    var message5 = ["fabric","pen \u0026 paper","paint","collage","video","code","card \u0026 tape","pipe cleaners","existing objects","CAD","Photoshop","Excel"];
    
    var answer5 = document.getElementById("answer5");
    
    var display5 = message5[Math.floor(Math.random() * message5.length)];
    
    answer5.innerText = display5;  
}