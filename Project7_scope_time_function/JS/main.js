//This is global variable//
var X = 10; //it is global because the variable is assigned outside the function
function Add_numbers_1() {
    document.getElementById("Add_1").innerHTML = (20 + X + "<br>");
}
function Add_numbers_2() {
    document.getElementById("Add_2").innerHTML = (X + 100);
}
Add_numbers_1();
Add_numbers_2();

//This is local variable//
function Add_numbers_3() {
    var A = 10;
    document.getElementById("Add_3").innerHTML = (20 + A + "<br>");
}
function Add_numbers_4() {//A is not defined in this therefore it doesn't work
    document.getElementById("Add_4").innerHTML = (A + 100);//console.log shows A is undefined
    }
Add_numbers_3();
Add_numbers_4();

//This is the colsole.log
function Add_numbers_5() {
    var A = 10;
    document.getElementById("Add_5").innerHTML = (A + 100);
    console.log(15 + A) 
}

//This is the IF statement with time
function get_Date() {
    if (new Date().getHours() < 18) { //this is in military time
    document.getElementById("Date").innerHTML = "How are you today?";//if time is before 6pm then onclick will display this
    }
}

function get_Answer() {
    if (5 < 6) {
        document.getElementById("if").innerHTML = "5 is less than 6.";
    }
}

//This is Else statement
function age_Function() {//this is IF and Else statement
    Age = document.getElementById("Age").value;
    if (Age >= 18) {                     
        Vote = "You are old enough to vote!";//if this is true then you get the if statement
    }
    else {
        Vote = "You are not old enough to vote!";//if not true you get else statement
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}

//Else IF statement
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time >=12 == Time < 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time <18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;

}
