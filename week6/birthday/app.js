submit.onclick = function() {
    
    var day = document.getElementById("day");
    
    var month = document.getElementById('month');
    
    var year = document.getElementById('year');
    
    
	var submit = document.getElementById("submit");
    
	var message1 = document.getElementById("message1");
    var message2 = document.getElementById("message2");
    
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();
    
    var years = yyyy - year.value;
    var months = mm - month.value;
    var days = dd - day.value;
    
    var days_in_month = daysInMonth(mm,yyyy);
    
    if (days <= 0) {
        months -= 1;
        days += days_in_month;
    }
    
    if (months <= 0) {
        years -= 1;
        months += 12;
    }
    
    
    
    
    message1.innerText = "You are " + years + " years " + months + " months " + days + " days old."; 
    
 
};   
        
function daysInMonth(month, year) {
     return new Date(year, month, 0).getDate();
}





