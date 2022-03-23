function addition_Function() {
    var addition = 2 + 2;
    document.getElementById("Math") .innerHTML = "2 + 2 = " + addition;//each elementbyID needs its own unique id
}

function subtraction_Function() {
    var Subtraction = 5 - 1;
    document.getElementById("Math1").innerHTML = "5 - 1 = " + Subtraction;//this is what shows up after the "onclick"
}

function multiply_Function() {
    var simple_Math = 6 * 8;
    document.getElementById("Multiply").innerHTML = "6 x 8 = " + simple_Math;
}

function division_Function() {
    var simple_Math = 48 / 6;
    document.getElementById("Divide").innerHTML = "48 / 6 = " + simple_Math;
}

function more_Math() {
    var simple_Math = (1 + 3) * 10 / 2 -5;
    document.getElementById("Math2").innerHTML = "(1 + 3) * 10 / 2 - 5 = " + simple_Math;//this is an operation with multiple operators
}

function modulus_Operator() {
    var simple_Math = 25 % 6;
    document.getElementById("Math3").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math;//this is how to get ramainders
}

function negation_Operator() {
    var x = 10;
    document.getElementById("Math4").innerHTML = -x;//this is how to get the negative of whatver the var is
}

function increment_Operator() {
   var y = 5;
    y++;                                            //this is how to add an increment of 1 
document.getElementById("Increment").innerHTML = (y); 
}

function decrement_Operator() {
    var z = 5.25;
    z--;                                           //this is how to get decrement of 1
    document.getElementById("Decrement").innerHTML = (z);
}

window.alert(Math.random() * 100);                 //this will give a random number in the window alert