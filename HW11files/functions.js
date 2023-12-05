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
    // document.getElementById("previous").addEventListener("click", function(){
    //     index--;
    //     if (index < 0) {
    //     index = 5
    //     }
    //     document.getElementById("picture").src = images[index];
    //     document.getElementById("caption").innerHTML=captions[index];
    // });

    // document.getElementById("next").addEventListener("click", ChangeImage);

    // document.getElementById("play").addEventListener("click", function(){ 
    //     clearInterval(timer);
    //     timer = setInterval("ChangeImage()",1000);
    // });

    // document.getElementById("pause").addEventListener("click", PauseSlideShow);

    document.getElementById("find").addEventListener("change", function(){ // event listener to update according to what is being calculated for
        if(document.getElementById("give_width").checked){
            document.getElementById("pixels").style.display = "none";
            document.getElementById("screen_width_input").style.display = "none";
            document.getElementById("screen_height_input").style.display = "none";
            document.getElementById("screen_ratio_input").style.display = "none";
            document.getElementById("aspect_ratio").style.display = "block";
            document.getElementById("given_width").value = 0;
            document.getElementById("given_height").value = 0;
            document.getElementById("exact_ratio_width").value = 0;
        }
        else if(document.getElementById("give_height").checked){
            document.getElementById("pixels").style.display = "none";
            document.getElementById("screen_width_input").style.display = "none";
            document.getElementById("screen_height_input").style.display = "none";
            document.getElementById("screen_ratio_input").style.display = "none";
            document.getElementById("aspect_ratio").style.display = "block";
            document.getElementById("given_width").value = 0;
            document.getElementById("given_height").value = 0;
            document.getElementById("exact_ratio_width").value = 0;
        }
        else if(document.getElementById("give_ratio").checked){
            document.getElementById("pixels").style.display = "block";
            document.getElementById("screen_width_input").style.display = "block";
            document.getElementById("screen_height_input").style.display = "block";
            document.getElementById("screen_ratio_input").style.display = "block";
            document.getElementById("aspect_ratio").style.display = "none";
            document.getElementById("given_width").value = 0;
            document.getElementById("given_height").value = 0;
            document.getElementById("exact_ratio_width").value = 0;
        }
    });

    document.getElementById("aspect_ratio").addEventListener("change", function(){  // event listener for updated according to chosen aspect ratio
        if(document.getElementById("give_width").checked){
            document.getElementById("pixels").style.display = "block";
            document.getElementById("screen_width_input").style.display = "block";
            document.getElementById("screen_height_input").style.display = "none";
            document.getElementById("screen_ratio_input").style.display = "none";
            document.getElementById("given_width").value = 0;
            document.getElementById("given_height").value = 0;
            document.getElementById("exact_ratio_width").value = 0;
            document.getElementById("text_labels").innerHTML = "Width X Height";
        }
        else if(document.getElementById("give_height").checked){
            document.getElementById("pixels").style.display = "block";
            document.getElementById("screen_width_input").style.display = "none";
            document.getElementById("screen_height_input").style.display = "block";
            document.getElementById("screen_ratio_input").style.display = "none";
            document.getElementById("given_width").value = 0;
            document.getElementById("given_height").value = 0;
            document.getElementById("exact_ratio_width").value = 0;
            document.getElementById("text_labels").innerHTML = "Height X Width";
        }
    });

    document.getElementById("given_width").addEventListener("change", function(){   // calculates the height according to the given width and aspect ratio
        if(document.getElementById("give_width").checked){
            // if(isNaN(document.getElementById("given_width"))){
            //     document.getElementById("given_width").value = 0;
            // }
            // else{
                var screenwidth = document.getElementById("given_width").value;
                screenwidth = parseInt(screenwidth);
                var screenheight;
                if(document.getElementById("onebyone").checked){
                    screenheight = screenwidth;
                    document.getElementById("calculated_height").value = screenheight;
                }
                else if(document.getElementById("fourbythree").checked){
                    screenheight = Math.round(screenwidth / 1.33);
                    document.getElementById("calculated_height").value = screenheight;
                }
                else if(document.getElementById("fourbythree").checked){
                    screenheight = Math.round(screenwidth / 1.33);
                    document.getElementById("calculated_height").value = screenheight;
                }
                else if(document.getElementById("fivebyfour").checked){
                    screenheight = Math.round(screenwidth / 1.25);
                    document.getElementById("calculated_height").value = screenheight;
                }
                else if(document.getElementById("threebytwo").checked){
                    screenheight = Math.round(screenwidth / 1.5);
                    document.getElementById("calculated_height").value = screenheight;
                }
                else if(document.getElementById("sixteenbyten").checked){
                    screenheight = Math.round(screenwidth / 1.6);
                    document.getElementById("calculated_height").value = screenheight;
                }
                else if(document.getElementById("sixteenbynine").checked){
                    screenheight = Math.round(screenwidth / 1.78);
                    document.getElementById("calculated_height").value = screenheight;
                }
                else if(document.getElementById("seventeenbynine").checked){
                    screenheight = Math.round(screenwidth / 1.89);
                    document.getElementById("calculated_height").value = screenheight;
                }
                else if(document.getElementById("twentyonebynine").checked){
                    screenheight = Math.round(screenwidth / 2.37);
                    document.getElementById("calculated_height").value = screenheight;
                }
                else if(document.getElementById("thirtytwobynine").checked){
                    screenheight = Math.round(screenwidth / 3.56);
                    document.getElementById("calculated_height").value = screenheight;
                }
                else if(document.getElementById("fourbyone").checked){
                    screenheight = Math.round(screenwidth / 4);
                    document.getElementById("calculated_height").value = screenheight;
                }
            // }
        }
    });

    document.getElementById("given_height").addEventListener("change", function(){   // calulates the width according to the given height and aspect ratio
        if(document.getElementById("give_height").checked){
            // if(isNaN(document.getElementById("given_height"))){
            //     document.getElementById("given_height").value = 0;
            // }
            // else{
                var screenheight = document.getElementById("given_height").value;
                screenheight = parseInt(screenheight);
                var screenwidth;
                if(document.getElementById("onebyone").checked){
                    screenwidth = screenheight;
                    document.getElementById("calculated_width").value = screenwidth;
                }
                else if(document.getElementById("fourbythree").checked){
                    screenwidth = Math.round(screenheight * 1.33);
                    document.getElementById("calculated_width").value = screenwidth;
                }
                else if(document.getElementById("fourbythree").checked){
                    screenwidth = Math.round(screenheight * 1.33);
                    document.getElementById("calculated_width").value = screenwidth;
                }
                else if(document.getElementById("fivebyfour").checked){
                    screenwidth = Math.round(screenheight * 1.25);
                    document.getElementById("calculated_width").value = screenwidth;
                }
                else if(document.getElementById("threebytwo").checked){
                    screenwidth = Math.round(screenheight * 1.5);
                    document.getElementById("calculated_width").value = screenwidth;
                }
                else if(document.getElementById("sixteenbyten").checked){
                    screenwidth = Math.round(screenheight * 1.6);
                    document.getElementById("calculated_width").value = screenwidth;
                }
                else if(document.getElementById("sixteenbynine").checked){
                    screenwidth = Math.round(screenheight * 1.78);
                    document.getElementById("calculated_width").value = screenwidth;
                }
                else if(document.getElementById("seventeenbynine").checked){
                    screenwidth = Math.round(screenheight * 1.89);
                    document.getElementById("calculated_width").value = screenwidth;
                }
                else if(document.getElementById("twentyonebynine").checked){
                    screenwidth = Math.round(screenheight * 2.37);
                    document.getElementById("calculated_width").value = screenwidth;
                }
                else if(document.getElementById("thirtytwobynine").checked){
                    screenwidth = Math.round(screenheight * 3.56);
                    document.getElementById("calculated_width").value = screenwidth;
                }
                else if(document.getElementById("fourbyone").checked){
                    screenwidth = Math.round(screenheight * 4);
                    document.getElementById("calculated_width").value = screenwidth;
                }
            // }
        }
    });
}

function constructstory() {
    var name, place1, activity1, noun1, adjective1, season, emotion1, adjective2,
        transportation, time, sense1, place2, emotion2, things1, things2, things3,
        place3, noun2, number, things4, adjective3, groups, things5, verb1, verb2;
    name = document.getElementById("name").value;
    place1 = document.getElementById("placeone").value;
    activity1 = document.getElementById("activityone").value;
    noun1 = document.getElementById("nounone").value;
    adjective1 = document.getElementById("adjectiveone").value;
    season = document.getElementById("season").value;
    emotion1 = document.getElementById("emotionone").value;
    adjective2 = document.getElementById("adjectivetwo").value;
    transportation = document.getElementById("transportation").value;
    time = document.getElementById("time").value;
    sense1 = document.getElementById("senseone").value;
    place2 = document.getElementById("placetwo").value;
    emotion2 = document.getElementById("emotiontwo").value;
    things1 = document.getElementById("thingsone").value;
    things2 = document.getElementById("thingstwo").value;
    things3 = document.getElementById("thingsthree").value;
    place3 = document.getElementById("placethree").value;
    noun2 = document.getElementById("nountwo").value;
    number = document.getElementById("number").value;
    things4 = document.getElementById("thingsfour").value;
    adjective3 = document.getElementById("adjectivethree").value;
    groups = document.getElementById("groups").value;
    things5 = document.getElementById("thingsfive").value;
    verb1 = document.getElementById("verbone").value;
    verb2 = document.getElementById("verbtwo").value;
    document.getElementById("story").innerHTML =
        "<span>" + name + "</span>'s trip to <span>" + place1 + "</span> to <span>" +
        activity1 + "</span> the <span>" + noun1 + "</span>." + "<p><span>" + name +
        "</span> was so <span>" + adjective1 + "</span> to <span>" + activity1 +
        "</span> the <span>" + noun1 + "</span> once <span>" + season +
        "</span> vacation had begun. The <span>" + emotion1 + "</span> was <span>" + adjective2 +
        "</span>, the thought of <span>" + adjective1 + "</span>ing the <span>" +
        noun1 + "</span> was too much as <span>" + name + "</span> took the <span>" +
        transportation + "</span> first thing in the <span>" + time +
        "</span>! When <span>" + name + "</span> arrived, the <span>" + sense1 +
        "</span> of the <span>" + place2 + "</span> was <span>" + emotion2 +
        "</span>. The <span>" + things1 + "</span>, the <span>" + things2 +
        "</span>, the <span>" + things3 + "</span>, it was like <span>" +
        name + "</span> was visiting <span>" + place3 +
        "</span>!</p><p> But there was no <span>" + noun2 + "</span> to waste. <span>" +
        name + "</span> only had <span>" + number + "</span> days to spend before <span>" +
        things4 + "</span> <span>" + adjective3 + "</span> again.<span>" +
        name + "</span> passed through <span>" + groups + "</span>s of <span>" +
        things5 + "</span> for this moment and they were not going to miss out!" +
        name + verb1 + "</span> and <span>" + verb2 + "</span> until finally <span>" +
        name + "</span> arrived at the <span>" + place1 + "</span> so they could <span>" +
        activity1 + "</span> the <span>" + noun1 + "</span>. And they did!</p>";
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