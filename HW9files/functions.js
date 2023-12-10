window.addEventListener("load", AddListeners);
var images = new Array("resources/comicscottpilgrim.jpg", 
"resources/comicramonaflowers.jpg", "resources/comickniveschau.jpg", 
"resources/comickimpine.jpg", "resources/comicstephenstills.jpg", 
"resources/comicwallacewells.jpg");
var captions = new Array("Scott Pilgrim", "Ramona Flowers", "Knives Chau", 
"Kim Pine", "Stephen Stills", "Wallace Wells");
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