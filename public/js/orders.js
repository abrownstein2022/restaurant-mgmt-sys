//buttons to add to `Order`
var beefAddbtn = document.getElementById("beefAdd-1");
var turkeyAddbtn = document.getElementById("turkeyAdd-2");
var veggieAddbtn = document.getElementById("veggieAdd-3");
var friesAddbtn = document.getElementById("friesAdd-4");
var chipsAddbtn = document.getElementById("chipsAdd-5");
var sodaAddbtn = document.getElementById("sodaAdd-6");
var waterAddbtn = document.getElementById("waterAdd-7");
var cookieAddbtn = document.getElementById("cookieAdd-9");
var fruitSaladAddbtn = document.getElementById("fruitSaladAdd-8");

function beefOrder() {
    // get quantity from dropdown saves to variable quantity   
    let quantity = qty1.value;
 
    console.log(quantity);
  
    let beefTotal = quantity * 6;
    
    document.querySelector("#a-1").textContent = quantity;
    document.querySelector("#t-1").textContent = '$' + beefTotal + ".00";  
}

beefAddbtn.addEventListener("click", beefOrder);

function turkeyOrder() {
    // get quantity from dropdown saves to variable quantity   
    let quantity = qty2.value;
 
    console.log(quantity);
  
    let turkeyTotal = quantity * 5;
    
    document.querySelector("#a-2").textContent = quantity;
    document.querySelector("#t-2").textContent = '$' + turkeyTotal + ".00";  
}

turkeyAddbtn.addEventListener("click", turkeyOrder);

function veggieOrder() {
    // get quantity from dropdown saves to variable quantity   
    let quantity = qty3.value;
 
    console.log(quantity);
  
    let veggieTotal = quantity * 5;
    
    document.querySelector("#a-3").textContent = quantity;
    document.querySelector("#t-3").textContent = '$' + veggieTotal + ".00";   
}

veggieAddbtn.addEventListener("click", veggieOrder);

function friesOrder() {
    // get quantity from dropdown saves to variable quantity   
    let quantity = qty4.value;
 
    console.log(quantity);
  
    let friesTotal = quantity * 2;
    
    document.querySelector("#a-4").textContent = quantity;
    document.querySelector("#t-4").textContent = '$' + friesTotal + ".00";   
}

friesAddbtn.addEventListener("click", friesOrder);

function chipsOrder() {
    // get quantity from dropdown saves to variable quantity   
    let quantity = qty5.value;
 
    console.log(quantity);
  
    let chipsTotal = quantity * 1;
    
    document.querySelector("#a-5").textContent = quantity;
    document.querySelector("#t-5").textContent = '$' + chipsTotal+  ".00";    
}

chipsAddbtn.addEventListener("click", chipsOrder);

function sodaOrder() { 
    // get quantity from dropdown saves to variable quantity
    let quantity = qty6.value;

    console.log(quantity);

    let sodaTotal = quantity * 2;

    document.querySelector("#a-6").textContent = quantity;
    document.querySelector("#t-6").textContent = '$' + sodaTotal + ".00";  
}

sodaAddbtn.addEventListener("click", sodaOrder);

function waterOrder() {
    // get quantity from dropdown saves to variable quantity
    let quantity = qty7.value;

    console.log(quantity);

    let waterTotal = quantity * 1;

    document.querySelector("#a-7").textContent = quantity;
    document.querySelector("#t-7").textContent ='$' +  waterTotal + ".00";  

}

waterAddbtn.addEventListener("click", waterOrder);
       
function cookieOrder() {
    // get quantity from dropdown saves to variable quantity
    let quantity = qty9.value;

    console.log(quantity);

    let cookieTotal = quantity * 2;

    document.querySelector("#a-9").textContent = quantity;
    document.querySelector("#t-9").textContent = '$' + cookieTotal + ".00"; 

}

cookieAddbtn.addEventListener("click", cookieOrder);

function fruitSaladOrder() {
    // get quantity from dropdown saves to variable quantity
    let quantity = qty8.value;

    console.log(quantity);

    let fruitSaladTotal = quantity * 2;

    document.querySelector("#a-8").textContent = quantity;
    document.querySelector("#t-8").textContent = '$' + fruitSaladTotal + ".00"; 

}

fruitSaladAddbtn.addEventListener("click", fruitSaladOrder);
/*
var qty1El = document.getElementById('qty1');


qty1El.addEventListener("click", showIt)

function showIt() {
    console.log('one');
}
*/