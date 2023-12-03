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
        else{
            size = "large";
        }

        document.getElementById("size").value = size;
    })

    document.getElementById("days").addEventListener("change", function(){
        var days = document.getElementById("days").value;
        days = parseInt(days);
        var fee;

        if (isNaN(days)){
            days = 0;
            document.getElementById("boardingFee").value = "0.00";
        }
        else{
            fee = 19.99 * days;
        }

        document.getElementById("days").value = days;
        document.getElementById("boardingFee").value = fee.toFixed(2);
    })
}