function constructmenu() {
    var main, side1, side2;
    main = document.getElementById("maindish").value;
    side1 = document.getElementById("sidedishone").value;
    side2 = document.getElementById("sidedishtwo").value;
    document.getElementById("menu").innerHTML = "The menu for dinner tonight includes " + main + ", " + side1 + ", and " + side2 + "."
}

function computeaverage() {
    var quiz1, quiz2, quiz3, average;
    quiz1 = document.getElementById("quizone").value;
    quiz2 = document.getElementById("quiztwo").value;
    quiz3 = document.getElementById("quizthree").value;
    average = (parseFloat(quiz1) + parseFloat(quiz2) + parseFloat(quiz3)) / 3;
    document.getElementById("average").innerHTML = "The average score is " + average.toFixed(1) + "."; 
}