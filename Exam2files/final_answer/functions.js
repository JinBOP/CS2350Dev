window.addEventListener("load", AddListeners);

function AddListeners(){
    document.getElementById("raffletickets").addEventListener("change", function(){
        var total = 0.00;
        var amount = document.getElementById("raffletickets").value;
        amount = parseInt(amount);

        if (document.getElementById("odds").value == 0){
            total = amount * 7;
        }
        else if (document.getElementById("odds").value == 1){
            total = amount * 12;
        }
        else if (document.getElementById("odds").value == 2){
            total = amount * 17;
        }
        document.getElementById("totalcost").value = total.toFixed(2);
    });
};