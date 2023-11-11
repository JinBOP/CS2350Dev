window.addEventListener("load", AddListeners);
var images = new Array("alligator.jpg", "beware.jpg", "fatBoy.jpg", "gatorEyes.jpg", "gatorGoing.jpg", "gatorRain.jpg");
var index = 0;

function AddListeners() {
    document.getElementById("next").addEventListener("click", ChangeImage);
}

function ChangeImage() {
    index++;
    if (index > images.length - 1) {
        index = 0
    }
    document.getElementById("picture").src = images[index];
}