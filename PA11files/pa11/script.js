window.addEventListener("load", addListeners)

function addListeners() {
    document.getElementById("sing").addEventListener("change", function(){
        if(document.getElementById("sing").checked){
            document.getElementById("singAdd").style.display = "block";
        }
        else{
            document.getElementById("singAdd").style.display = "none";
        }

        ComputeTotal();
    })
    
    document.getElementById("cute").addEventListener("change", function(){
        if(document.getElementById("cute").checked){
            document.getElementById("cuteAdd").style.display = "block";
        }
        else{
            document.getElementById("cuteAdd").style.display = "none";
        }

        ComputeTotal();
    })

    document.getElementById("trick").addEventListener("change", function(){
        if(document.getElementById("trick").checked){
            document.getElementById("trickAdd").style.display = "block";
        }
        else{
            document.getElementById("trickAdd").style.display = "none";
        }

        ComputeTotal();
    })

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

        ComputeTotal();
    })
}

function ComputeTotal(){
    var registration = 0;
    var events = 0;
    var boarding = document.getElementById("boardingFee").value;

    if (boarding == ""){
        boarding = 0;
    }
    else {
        boarding = parseFloat(boarding);
    }

    if(document.getElementById("sing").checked){
        events++;
    }

    if(document.getElementById("cute").checked){
        events++;
    }

    if(document.getElementById("trick").checked){
        events++;
    }

    registration = 120 * events;
    var total = boarding + registration;

    document.getElementById("boardingCost").value = boarding.toFixed(2);
    document.getElementById("registrationCost").value = registration.toFixed(2);
    document.getElementById("totalCost").value = total.toFixed(2);
  }