//https://coinmarketcap.com/all/views/all/
//https://currencylayer.com/documentation

var change = 0;
$(document).ready(function(){
    $("#start").click(function(){
        var key1 = "50bc5ff202bf95fc2bbd19cb25b01bf9";
        var url1 = "http://www.apilayer.net/api/live?access_key=" + key1;
        
        
        var url2 = "https://api.coinmarketcap.com/v1/ticker/?limit=10";
        
        //requests currency exchange rate from the API
        $.getJSON(url1, function(json) {
            var first_cur = document.getElementById("query1").value;
            var second_cur = document.getElementById("query2").value;
            var amount = document.getElementById("amount").value;
            
            var change = amount/json.quotes["USD"+first_cur]*json.quotes["USD"+second_cur];
            addMessage(change);
            
            
            
            $.getJSON(url2, function(data){
                console.log(data);
                for(let i = 0; i < data.length; i++) {
                    let name = data[i].name;
                    let price = data[i].price_usd*json.quotes["USD"+first_cur];
                    let crypto_conversion = amount/json.quotes["USD"+first_cur]/data[i].price_usd;
                    addTable(name, price, crypto_conversion);
                }
            });
        });
        
        
    })
})

function addTable(name, price, crypto_conversion){
    
}

function addMessage(change){
    var exchange = document.getElementById("exchange");
    var msg = document.createElement("div");
    var text = document.createElement("p");
    
    msg.className = "message";
    text.innerText = "Your amount of " + $("#query1 option:selected").text() + "(s) " + document.getElementById("amount").value + " converts to " + change + " " + $("#query2 option:selected").text() + "(s)";
    text.className = "text";
    msg.appendChild(text);
    exchange.appendChild(msg);
}