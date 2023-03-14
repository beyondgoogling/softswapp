function shownairaPrice() {
  // Get the value of the last updated price from the hidden input field
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "api/btcnaira.php", true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var response = xhr.responseText;
      document.getElementById("nairaPrice").value =response;
      //document.getElementById("xnairaPrice").innerHTML = "₦"+ response; //+
      //shownairaPrice();
     console.log(response);
    }
  };
  xhr.send();
 
}

window.onload = shownairaPrice();
 
