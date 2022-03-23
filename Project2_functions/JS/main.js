const x = function (a, b) {return a * b}; //this function will multiply and return the 2 variables "a" and "b"
document.getElementById("demo").innerHTML = x(3, 3);//this is where you enter the variables of what you want multiplied

function My_First_Function() {              //Defining a function and naming it                              
    var str = "The answer is 12!";   //Defining a variable and giving it a string value

    document.getElementById("Button_Text").innerHTML = str; //Putting the value 
                                            //of the variable into the HTML elementFromPoint
                                            //with the "Button_Text" id
}

function myFunction() {
    var sentence = "I am learning"; 
    sentence += " a lot from this course!"; //This is to add to the sentence
    document.getElementById("Concatenate").innerHTML= sentence; //.innerHTML modifies the content of the HTML element
}