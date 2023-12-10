window.addEventListener("load", AddListeners);

function AddListeners() {
    document.getElementById("find").addEventListener("change", function(){ // event listener to update according to what is being calculated for
        if(document.getElementById("give_width").checked){
            document.getElementById("pixels").style.display = "none";
            document.getElementById("screen_width_input").style.display = "none";
            document.getElementById("screen_height_input").style.display = "none";
            document.getElementById("screen_ratio_input").style.display = "none";
            document.getElementById("aspect_ratio").style.display = "block";
            document.getElementById("display_total_pixels").style.display = "block";
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
            document.getElementById("display_total_pixels").style.display = "block";
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
            document.getElementById("display_total_pixels").style.display = "block";
            document.getElementById("text_labels").style.display = "none";
            document.getElementById("calculated_height").style.display = "none";
            document.getElementById("calculated_width").style.display = "none";
            document.getElementById("given_width").value = 0;
            document.getElementById("calculated_height").value = 0;
            document.getElementById("given_height").value = 0;
            document.getElementById("calculated_width").value = 0;
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
        if(isNaN(document.getElementById("given_width").value)){
            document.getElementById("given_width").value = 0;
        }
        else if(document.getElementById("give_width").checked){
            var screenwidth = document.getElementById("given_width").value;
            screenwidth = parseInt(screenwidth);
            var screenheight;
            if(document.getElementById("onebyone").checked){
                screenheight = screenwidth;
                document.getElementById("calculated_height").value = screenheight;
                document.getElementById("aspect_ratio").value = document.getElementById("onebyone").value;
            }
            else if(document.getElementById("fourbythree").checked){
                screenheight = Math.round(screenwidth / 1.33);
                document.getElementById("calculated_height").value = screenheight;
                document.getElementById("aspect_ratio").value = document.getElementById("fourbythree").value;
            }
            else if(document.getElementById("fivebyfour").checked){
                screenheight = Math.round(screenwidth / 1.25);
                document.getElementById("calculated_height").value = screenheight;
                document.getElementById("aspect_ratio").value = document.getElementById("fivebyfour").value;
            }
            else if(document.getElementById("threebytwo").checked){
                screenheight = Math.round(screenwidth / 1.5);
                document.getElementById("calculated_height").value = screenheight;
                document.getElementById("aspect_ratio").value = document.getElementById("threebytwo").value;
            }
            else if(document.getElementById("sixteenbyten").checked){
                screenheight = Math.round(screenwidth / 1.6);
                document.getElementById("calculated_height").value = screenheight;
                document.getElementById("aspect_ratio").value = document.getElementById("sixteenbyten").value;
            }
            else if(document.getElementById("sixteenbynine").checked){
                screenheight = Math.round(screenwidth / 1.78);
                document.getElementById("calculated_height").value = screenheight;
                document.getElementById("aspect_ratio").value = document.getElementById("sixteenbynine").value;
            }
            else if(document.getElementById("seventeenbynine").checked){
                screenheight = Math.round(screenwidth / 1.89);
                document.getElementById("calculated_height").value = screenheight;
                document.getElementById("aspect_ratio").value = document.getElementById("seventeenbynine").value;
            }
            else if(document.getElementById("twentyonebynine").checked){
                screenheight = Math.round(screenwidth / 2.37);
                document.getElementById("calculated_height").value = screenheight;
                document.getElementById("aspect_ratio").value = document.getElementById("twentyonebynine").value;
            }
            else if(document.getElementById("thirtytwobynine").checked){
                screenheight = Math.round(screenwidth / 3.56);
                document.getElementById("calculated_height").value = screenheight;
                document.getElementById("aspect_ratio").value = document.getElementById("thirtytwobynine").value;
            }
            else if(document.getElementById("fourbyone").checked){
                screenheight = Math.round(screenwidth / 4);
                document.getElementById("calculated_height").value = screenheight;
                document.getElementById("aspect_ratio").value = document.getElementById("fourbyone").value;
            }
            var finalratio = document.getElementById("aspect_ratio").value;
            var finalwidth = document.getElementById("given_width").value;
            var finalheight = document.getElementById("calculated_height").value;
            var total = finalwidth * finalheight;
            document.getElementById("pixel_total").innerHTML = "Using an Aspect ratio of <span>" + finalratio + "</span>, a Width of <span>" + finalwidth + "</span> pixels, and a Height of <span>" + finalheight + "</span> pixels, that amounts to <span>" + total + "</span> total pixels!";
        }
        else if(document.getElementById("give_ratio").checked){  // displays final message when exact ratio is chosen
            if(isNaN(document.getElementById("given_width").value)){
                document.getElementById("given_width").value = 0;
                document.getElementById("exact_ratio_width").value = 0;
                document.getElementById("exact_ratio_height").value = 0;
            }
            else{
            var screenwidth = document.getElementById("given_width").value;
            var screenheight = document.getElementById("given_height").value;
            var ratiowidth = screenwidth / screenheight;
            var ratioheight = screenwidth / screenwidth;
            document.getElementById("exact_ratio_width").value = ratiowidth;
            document.getElementById("exact_ratio_height").value = ratioheight;

            var finalwidth = document.getElementById("given_width").value;
            var finalheight = document.getElementById("given_height").value;
            var total = finalwidth * finalheight;
            document.getElementById("pixel_total").innerHTML = "Using an Aspect ratio of <span>" + ratiowidth.toFixed(2) + ":" + ratioheight + "</span>, a Width of <span>" + finalwidth + "</span> pixels, and a Height of <span>" + finalheight + "</span> pixels, that amounts to <span>" + total + "</span> total pixels!";
            }
        }
    });

    document.getElementById("given_height").addEventListener("change", function(){   // calulates the width according to the given height and aspect ratio
        if(isNaN(document.getElementById("given_height").value)){
            document.getElementById("given_height").value = 0;
        }
        else if(document.getElementById("give_height").checked){
            var screenheight = document.getElementById("given_height").value;
            screenheight = parseInt(screenheight);
            var screenwidth;
            if(document.getElementById("onebyone").checked){
                screenwidth = screenheight;
                document.getElementById("calculated_width").value = screenwidth;
                document.getElementById("aspect_ratio").value = document.getElementById("onebyone").value;
            }
            else if(document.getElementById("fourbythree").checked){
                screenwidth = Math.round(screenheight * 1.33);
                document.getElementById("calculated_width").value = screenwidth;
                document.getElementById("aspect_ratio").value = document.getElementById("fourbythree").value;
            }
            else if(document.getElementById("fivebyfour").checked){
                screenwidth = Math.round(screenheight * 1.25);
                document.getElementById("calculated_width").value = screenwidth;
                document.getElementById("aspect_ratio").value = document.getElementById("fivebyfour").value;
            }
            else if(document.getElementById("threebytwo").checked){
                screenwidth = Math.round(screenheight * 1.5);
                document.getElementById("calculated_width").value = screenwidth;
                document.getElementById("aspect_ratio").value = document.getElementById("threebytwo").value;
            }
            else if(document.getElementById("sixteenbyten").checked){
                screenwidth = Math.round(screenheight * 1.6);
                document.getElementById("calculated_width").value = screenwidth;
                document.getElementById("aspect_ratio").value = document.getElementById("sixteenbyten").value;
            }
            else if(document.getElementById("sixteenbynine").checked){
                screenwidth = Math.round(screenheight * 1.78);
                document.getElementById("calculated_width").value = screenwidth;
                document.getElementById("aspect_ratio").value = document.getElementById("sixteenbynine").value;
            }
            else if(document.getElementById("seventeenbynine").checked){
                screenwidth = Math.round(screenheight * 1.89);
                document.getElementById("calculated_width").value = screenwidth;
                document.getElementById("aspect_ratio").value = document.getElementById("seventeenbynine").value;
            }
            else if(document.getElementById("twentyonebynine").checked){
                screenwidth = Math.round(screenheight * 2.37);
                document.getElementById("calculated_width").value = screenwidth;
                document.getElementById("aspect_ratio").value = document.getElementById("twentyonebynine").value;
            }
            else if(document.getElementById("thirtytwobynine").checked){
                screenwidth = Math.round(screenheight * 3.56);
                document.getElementById("calculated_width").value = screenwidth;
                document.getElementById("aspect_ratio").value = document.getElementById("thirtytwobynine").value;
            }
            else if(document.getElementById("fourbyone").checked){
                screenwidth = Math.round(screenheight * 4);
                document.getElementById("calculated_width").value = screenwidth;
                document.getElementById("aspect_ratio").value = document.getElementById("fourbyone").value;
            }
            var finalratio = document.getElementById("aspect_ratio").value;
            var finalwidth = document.getElementById("given_height").value;
            var finalheight = document.getElementById("calculated_width").value;
            var total = finalwidth * finalheight;
            document.getElementById("pixel_total").innerHTML = "Using an Aspect ratio of <span>" + finalratio + "</span>, a Width of <span>" + finalwidth + "</span> pixels, and a Height of <span>" + finalheight + "</span> pixels, that amounts to <span>" + total + "</span> total pixels!";
        }
        else if(document.getElementById("give_ratio").checked){  // displays final message when exact ratio is chosen
            if(isNaN(document.getElementById("given_height").value)){
                document.getElementById("given_height").value = 0;
                document.getElementById("exact_ratio_width").value = 0;
                document.getElementById("exact_ratio_height").value = 0;
            }
            var screenwidth = document.getElementById("given_width").value;
            var screenheight = document.getElementById("given_height").value;
            var ratiowidth = screenwidth / screenheight;
            var ratioheight = screenwidth / screenwidth;
            document.getElementById("exact_ratio_width").value = ratiowidth;
            document.getElementById("exact_ratio_height").value = ratioheight;

            var finalwidth = document.getElementById("given_width").value;
            var finalheight = document.getElementById("given_height").value;
            var total = finalwidth * finalheight;
            document.getElementById("pixel_total").innerHTML = "Using an Aspect ratio of <span>" + ratiowidth.toFixed(2) + ":" + ratioheight + "</span>, a Width of <span>" + finalwidth + "</span> pixels, and a Height of <span>" + finalheight + "</span> pixels, that amounts to <span>" + total + "</span> total pixels!";
        }
    });
}