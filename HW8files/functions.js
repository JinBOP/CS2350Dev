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
    emotion1 = document.getElementById("emotinoone").value;
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