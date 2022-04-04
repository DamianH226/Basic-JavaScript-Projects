/*This is JSON string variable*/
var dog = '{"name": "Dax", "breed": "Great Pyrenees", "color": "White"}';
/*convert JSON string to JavaScript objects*/
var JSONstring = JSON.parse(dog);
document.getElementById("myDog").innerHTML = JSONstring.name + " the " +
    JSONstring.breed;
