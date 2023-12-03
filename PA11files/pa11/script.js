window.addEventListener("load", addListeners)

function addListeners() {
    document.getElementById("weight").addEventListener("change", function(){
        var weight = document.getElementById("weight").value;
        weight = parseFloat(weight);
        var size;

        if (isNaN(weight)){
            size = "";
        }
        else if (weight <= 4){
            size = "mini";
        }
        else if (weight > 4 && weight <= 12){
            size = "small";
        }
        else if (weight > 12 && weight <= 50){
            size = "medium";
        }
        else if (weight > 50){
            size = "large";
        }

        document.getElementById("size").value = size;
    })
}