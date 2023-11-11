window.addEventListener("load", AddListeners);
var images = new Array("alligator.jpg", "beware.jpg", "fatBoy.jpg", "gatorEyes.jpg", "gatorGoing.jpg", "gatorRain.jpg");
var captions = new Array("gator boy", "watch out!", "fatty", "peepers", "on the move", "in the rain");
var index = 0;
var timer;

function AddListeners() {
    document.getElementById("next").addEventListener("click", ChangeImage);
    document.getElementById("play").addEventListener("click", function(){ 
        timer = setInterval("ChangeImage()",1000);
    });
}

function ChangeImage() {
    index++;
    if (index > images.length - 1) {
        index = 0
    }
    document.getElementById("picture").src = images[index];
    document.getElementById("caption").innerHTML=captions[index];
}