window.addEventListener("load", LoadEventListener);

var timer;
var index = 0;
var picturearray = ["images/cone0.jpg","images/cone1.jpg","images/cone2.jpg",
                    "images/cone3.jpg","images/cone4.jpg","images/cone5.jpg",
                    "images/cone6.jpg","images/cone7.jpg","images/cone8.jpg",
                    "images/cone9.jpg","images/cone10.jpg"];

function LoadEventListener() {
    document.getElementById("show").addEventListener("click", ShowFunction);
    document.getElementById("build").addEventListener("click", function() {
        clearInterval(timer);
        var vanillascoops = document.getElementById("vanilla").value;
        var chocolatescoops = document.getElementById("chocolate").value;
        var strawberryscoops = document.getElementById("strawberry").value;
        var totalscoops = parseFloat(vanillascoops) + parseFloat(chocolatescoops) + parseFloat(strawberryscoops);

        ShowImage(totalscoops);

        if (totalscoops >= 0 && totalscoops <= 10){
            document.getElementById("description").innerHTML = "The cone has " +
            vanillascoops + " vanilla scoops, " + chocolatescoops +
            " chocolate scoops, and " + strawberryscoops + " strawberry scoops." +
            " There are a total of " + totalscoops + " scoops of icecream.";
        }
    });

    document.getElementById("showall").addEventListener("click", StartShow);
    document.getElementById("showend").addEventListener("click", function() {
        clearInterval(timer);
    });
}

function ShowFunction() {
    clearInterval(timer);
    var vanillascoops = document.getElementById("vanilla").value;
    var chocolatescoops = document.getElementById("chocolate").value;
    var strawberryscoops = document.getElementById("strawberry").value;
    var totalscoops = parseFloat(vanillascoops) + parseFloat(chocolatescoops) + parseFloat(strawberryscoops);

    ShowImage(totalscoops);
}

function ShowImage(totalscoops){
    clearInterval(timer);
    if (totalscoops > 10) {
        document.getElementById("picture").src = "images/cone0.jpg";
        document.getElementById("description").innerHTML = 
        "Too much! Enter a total number of scoops between 0-10";
        index = 0;
    }
    else if (totalscoops < 0) {
        document.getElementById("picture").src = "images/cone0.jpg";
        document.getElementById("description").innerHTML = 
        "Too little! Enter a total number of scoops between 0-10";
        index = 0;
    }
    else {
    document.getElementById("picture").src = "images/cone" + totalscoops + ".jpg";
    index = totalscoops;
    }
}

function StartShow(){
    clearInterval(timer);
    timer = setInterval(ChangePicture, 1000);
}

function ChangePicture(){
    document.getElementById("picture").src = picturearray[index];
    index = index + 1;
    if (index >= picturearray.length){
        index = 0;
    }
}