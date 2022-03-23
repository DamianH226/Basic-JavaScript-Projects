document.write("10" + 5); //this is coercion

function my_Function() {
    document.getElementById("Test").innerHTML = 0/0;//This will display NaN because 0 can't be divided by 0
}

function nan_Function() {
    document.getElementById("NaNTest").innerHTML = isNaN('This is a string');//this will show NaN as "true" because 
                                                                            //'This is a string' is not a number
}

function othernan_Function() {
    document.getElementById("FalseTest").innerHTML = isNaN('007');//this will show "false" because 7 is a number
}

function infinity_Function() {
    document.getElementById("Infinity").innerHTML = 2E310;//This number is infinity
}

function neginfinity_Function() {
    document.getElementById("-Infinity").innerHTML = -3E310; //This number is negative infinity
}
//BOOLEAN//

function boolean1_Function() {
    document.getElementById("Boolean").innerHTML = (10 > 2);//This will display either true or false
}

function boolean2_Function() {
    document.getElementById("Boolean2").innerHTML = (10 < 2);
}


function dubequals_Function() {
    document.getElementById("DubEquals").innerHTML = (10 == 10);
}

function dubequals2_Function() {
    document.getElementById("DubEquals2").innerHTML = (3 == 11);
}

console.log(2 + 2);//in dev tools under console we will see the answer

function tripequals_Function() {
var X = 20;
var Y = 20;
    document.getElementById("tripequals").innerHTML = (X === Y); 
}

function tripequals2_Function() {//one is a string and one is not
    var A = 20;
    var B = "20";
        document.getElementById("tripequals2").innerHTML = (A === B); 
    }

function tripequals3_Function() {//Using strings
    var C = "Magnus";
    var D = "Magnus";
        document.getElementById("tripequals3").innerHTML = (C === D); 
    }
//LOGICAL OPERATORS//

function DDmy_Function() {//If one is true and one is false this outcome will be false //This is written as && (AND)
                          //both must be true in order to get true.This determine logic
    document.getElementById("DDmy_Function").innerHTML = (5 > 2 && 10 > 4);
}

function or_Function() {//This is wrtieen as || (OR)
    document.getElementById("or_Function").innerHTML = (5 > 10 || 10 > 4);
}

function or2_Function() {//This is the false (OR) operation
    document.getElementById("or2_Function").innerHTML = (5 > 10 || 10 > 20);
}

function not_Function() {
    document.getElementById("Not").innerHTML = !(5 > 10);
}

function not2_Function() {
    document.getElementById("Not2").innerHTML = !(20 > 10);
}
