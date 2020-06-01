var modal = document.getElementById("myModal");

var product1 = document.getElementsByClassName("product")[0];

var closeM = document.getElementsByClassName("close")[0];

closeM.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}

product1.onclick = function() {
    modal.style.display = "block";
}