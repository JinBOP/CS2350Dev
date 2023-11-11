window.addEventListener("load", AddListeners);
var images = new Array("alligator.jpg", "beware.jpg", "fatBoy.jpg", "gatorEyes.jpg", "gatorGoing.jpg", "gatorRain.jpg");
var captions = new Array("gator boy", "watch out!", "fatty", "peepers", "on the move", "in the rain");
var index = 0;
var timer;

function AddListeners() {
    document.getElementById("previous").addEventListener("click", function(){
        index--;
        if (index < 0) {
        index = 5
        }
        document.getElementById("picture").src = images[index];
        document.getElementById("caption").innerHTML=captions[index];
    });
    document.getElementById("next").addEventListener("click", ChangeImage);
    document.getElementById("play").addEventListener("click", function(){ 
        clearInterval(timer);
        timer = setInterval("ChangeImage()",1000);
    });
    document.getElementById("pause").addEventListener("click", PauseSlideShow);
}

function ChangeImage() {
    index++;
    if (index > images.length - 1) {
        index = 0
    }
    document.getElementById("picture").src = images[index];
    document.getElementById("caption").innerHTML=captions[index];
}

function PauseSlideShow() {
    clearInterval(timer);
}