/*JavaScript dictionary object*/
var dog = {name: "Dax", breed: "Great Pyrenees ", color: "White"};
/*convert Javascript objects to string format*/
var JSONstring = JSON.stringify(dog);
document.getElementById("myDog").innerHTML = JSONstring;
