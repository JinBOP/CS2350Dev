var username;   // var defines a variable
//username = prompt("Enter your name: ");    // prompt() asks for user input
//alert("Hello There " + username);   // alert() creates a pop up when the webpage is loaded
//console.log(document.getElementById("hello"));
//document.getElementById("hello").innerHTML = "Hello There " + username;

function PrintPetMessage () {   // creates the function names PrintPetMessage
    var petname;
    petname = document.getElementById("petinput").value;
    console.log(petname);
    document.getElementById("petmessage").innerHTML = petname + " is a great pet!";
}

function ComputeArea() {
    var height, width, area;
    height = document.getElementById("height").value;
    width = document.getElementById("width").value;
    area = height * width;
    document.getElementById("area").innerHTML = "Area = " + area;
}

function ComputeSum() {
    var value1, value2, sum;
    value1 = document.getElementById("first").value;
    value2 = document.getElementById("second").value;
    sum = parseFloat(value1) + parseFloat(value2);  // parseFloat() converts variable to a Float
    document.getElementById("sum").innerHTML = "Sum of " + value1 + " and " + value2 + " = " + sum;
}