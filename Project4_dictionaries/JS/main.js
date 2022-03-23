function my_Dictionary() {
    var Animal = {
        Species:"Dog",
        Color:"Black",
        Breed:"Labrador",
        Age:5,
        Sound:"Bark!"
    };
    delete Animal.Age; // delete can be written using its symbol as well as the word,
                        //Animal."" will delete whatever key you chose
    document.getElementById("Dictionary").innerHTML = Animal.Age; //whatever is after the ( . )is the key you are trying to get
}

