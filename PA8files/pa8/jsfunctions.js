function constructmenu() {
    var main, side1, side2;
    main = document.getElementById("maindish").value;
    side1 = document.getElementById("sidedishone").value;
    side2 = document.getElementById("sidedishtwo").value;
    document.getElementById("menu").innerHTML = "The menu for dinner tonight includes " + main + ", " + side1 + ", and " + side2 + "."
}