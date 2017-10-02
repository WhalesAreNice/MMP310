submit.onclick = function() {
    
    var user = document.getElementById("user");
    
    var long = document.getElementById("long");
    
    var keyword = document.getElementById('keyword');
    
    var test = '';
    
    var password = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*';
    
	var submit = document.getElementById("submit");
    
	var message1 = document.getElementById("message1");
    var message2 = document.getElementById("message2");
    
    var generate = password[Math.floor(Math.random() * password.length)];
    
    
    message1.innerText = "\nYour Username is : " + user.value + " \n\n Your password is :"; 
    
    
    
    for (let i=0; i < long.value; i++) {
         var generate = password[Math.floor(Math.random() * password.length)];
        
        test += generate;
    };
    
    message2.innerText = test;
    
};     



