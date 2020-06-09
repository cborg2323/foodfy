var buttonIngred = document.getElementsByClassName("shide")[0];
var buttonPrep = document.getElementsByClassName("shide")[1];
var buttonInfo = document.getElementsByClassName("shide")[2];

buttonIngred.onclick = function() {
    var uling = document.getElementById("ul-ing");

    if(uling.style.display == "" || uling.style.display == "block") {
        uling.style.display = "none";
        buttonIngred.textContent = "MOSTRAR";
    } else if(uling.style.display == "none") {
        uling.style.display = "";
        buttonIngred.textContent = "ESCONDER";
    }

}

buttonPrep.onclick = function() {
    var uling = document.getElementById("ul-prep");

    if(uling.style.display == "" || uling.style.display == "block") {
        uling.style.display = "none";
        buttonPrep.textContent = "MOSTRAR";
    } else if(uling.style.display == "none") {
        uling.style.display = "";
        buttonPrep.textContent = "ESCONDER";
    }

}

buttonInfo.onclick = function() {
    var uling = document.getElementById("p-info");

    if(uling.style.display == "" || uling.style.display == "block") {
        uling.style.display = "none";
        buttonInfo.textContent = "MOSTRAR";
    } else if(uling.style.display == "none") {
        uling.style.display = "";
        buttonInfo.textContent = "ESCONDER";
    }

}