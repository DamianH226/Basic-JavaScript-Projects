//This is the Concat method
function full_Sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence. ";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

//This is the Slice method
function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);//The numbers indicate which characters in your string will be cut out and displayed.
                                        //This code would display “Johnny.”
    document.getElementById("Slice").innerHTML = Section; 
}

//This is the number method
function string_Method() {//There are several types of number methods this one is the 
                         // “toString()” method that returns a number as a string.
    var X =182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

//This is the Precision Method
function precision_Method() {
    var Y = 12938.3012987376112;//This method formats a number to a specified length
    document.getElementById("Precision").innerHTML = Y.toPrecision(10);//10 being the amount of numbers displayed
}

