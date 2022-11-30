//buttons to add to `Order`
var beefAddbtn = document.getElementById("beefAdd");
var turkeyAddbtn = document.getElementById("turkeyAdd");
var veggieAddbtn = document.getElementById("veggieAdd");
var friesAddbtn = document.getElementById("friesAdd");
var chipsAddbtn = document.getElementById("chipsAdd");
var sodaAddbtn = document.getElementById("sodaAdd");
var waterAddbtn = document.getElementById("waterAdd");
var cookieAddbtn = document.getElementById("cookieAdd");
var fruitSaladAddbtn = document.getElementById("fruitSaladAdd");




function beefOrder() {
    // get quantity from dropdown saves to variable quantity   
    let quantity = qty1.value;
 
    console.log(quantity);
  
    let beefTotal = quantity * 6;
    
    document.querySelector("#a-1").textContent = quantity;
    document.querySelector("#t-1").textContent = beefTotal;  
}

beefAddbtn.addEventListener("click", beefOrder);


/*
var qty1El = document.getElementById('qty1');


qty1El.addEventListener("click", showIt)

function showIt() {
    console.log('one');
}
*/