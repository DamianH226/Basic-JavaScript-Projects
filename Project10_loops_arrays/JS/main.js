//This is the While Loop
function Loop() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

//This is the FOR Loop
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

//This is an Array with objects
function array_Function() {
    var daily_Activities = [];
    daily_Activities[0] = "sleeping";
    daily_Activities[1] = "playing video games";
    daily_Activities[2] = "eating";
    daily_Activities[3] = "hiking";
    document.getElementById("Array") .innerHTML = "In this array, I am  " +
    daily_Activities[1] + ".";
}

//This is the Const
function constant_function() {
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$1000";
    document.getElementById("Constant").innerHTML = "The cost of the " + 
        Musical_Instrument.type + " was " + Musical_Instrument.price;
}

//This is the LET
    var A = 82;
document.write(A);
{
    let A = 33;
    document.write ("<br>" + A);
}
document.write ("<br>" + A);

//This is the Object
let car = {
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    description : function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description();


