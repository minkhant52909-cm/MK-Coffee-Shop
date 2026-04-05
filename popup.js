document.addEventListener("DOMContentLoaded", function() {

  // Show modal
  document.getElementById("popupModal").style.display = "block";

  // Close button
  document.getElementById("closeBtn").onclick = function() {
    document.getElementById("popupModal").style.display = "none";
  };

  // Click outside
  window.onclick = function(event) {
    let modal = document.getElementById("popupModal");
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

});
//Button action
function claimoffer(){
    let email = document.getElementById("emailinput").ariaValueMax;
    if(email == ""){
        alert("Please enter your email");
    }
    else{
        alert("Dicsount code:MK90");
        document.getElementById("popupModal").style.display = "none";
    }
}